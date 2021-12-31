import java.io.IOException;
import java.io.File;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.util.List;
import java.io.FileReader;
import java.util.ArrayList;

public class Replace {
	public static void main(String[] args) throws IOException {
		for(int w = 967; w < 1263; w++) {
	        FileReader _fr = new FileReader("page_"+ w +".html");
	        BufferedReader textReader = new BufferedReader(_fr);

	        List<String> words = new ArrayList<>();
	        String line;
	        int lineNum = 0;
	        while ((line = textReader.readLine()) != null) {
	            words.add(line);
	        }
	        textReader.close();
	        for(int i = 0; i < words.size(); i++) {
	        	String test = words.get(i);
	        	if(test.equals("            <div id=\"toc\">")) {
	        		lineNum = i;
	        		System.out.println("line: "+ lineNum+ " For page: "+w);
	        	}
	        }
	        for(int i = 0; i <= 2165; i++) {
	        	int count = lineNum;
	        	words.remove(count);
	        	count++;
	        }
	        
	       FileWriter file = new FileWriter(new File("page_"+w+".html"));
	        for (int i = 0; i < words.size(); i++) {
	            file.write(words.get(i)+ "\n");
	        }
	        
	        file.close();
	        
		}
	 }
}
