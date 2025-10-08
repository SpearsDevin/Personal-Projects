import { createAudioContext, createVirtualAudioOutput } from './audioUtils.js';

const audioContext = createAudioContext();
let inputNode, outputNode, effectsChain = {};

async function setupMicrophone() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    inputNode = audioContext.createMediaStreamSource(stream);
    outputNode = audioContext.createMediaStreamDestination();
    applyEffects();
}

function applyEffects() {
    effectsChain.gain = audioContext.createGain();
    effectsChain.gain.gain.value = 1;
    
    effectsChain.pitch = audioContext.createBiquadFilter();
    effectsChain.pitch.type = "lowshelf";
    effectsChain.pitch.frequency.value = 300;
    effectsChain.pitch.gain.value = -30;
    
    effectsChain.distortion = audioContext.createWaveShaper();
    effectsChain.distortion.curve = makeDistortionCurve(50);
    
    effectsChain.reverb = audioContext.createConvolver();
    
    effectsChain.echo = audioContext.createDelay();
    effectsChain.echo.delayTime.value = 0.5;
    
    inputNode.connect(effectsChain.gain);
    effectsChain.gain.connect(effectsChain.pitch);
    effectsChain.pitch.connect(effectsChain.distortion);
    effectsChain.distortion.connect(effectsChain.reverb);
    effectsChain.reverb.connect(effectsChain.echo);
    effectsChain.echo.connect(outputNode);
}

function makeDistortionCurve(amount) {
    let n_samples = 256, curve = new Float32Array(n_samples);
    for (let i = 0; i < n_samples; i++) {
        let x = i * 2 / n_samples - 1;
        curve[i] = (3 + amount) * x * 20 * Math.PI / (Math.PI + amount * Math.abs(x));
    }
    return curve;
}

function toggleEcho(enabled) {
    if (enabled) {
        effectsChain.echo.connect(outputNode);
    } else {
        effectsChain.echo.disconnect(outputNode);
    }
}

setupMicrophone();
createVirtualAudioOutput(outputNode.stream);
