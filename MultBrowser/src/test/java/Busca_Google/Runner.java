package Busca_Google;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false,
		monochrome = true, 
		features = {"src/test/resources/"},//onde leio a feature
		glue = {"Busca_Google/"},//onde leio a classe
		plugin =  {
					"pretty",//Formatador padrao
					"html:target/cucumber-htmlreport",
					"json:target/cucumber-report.json", //Relatorio de execução que mostram os passos que funcionaram ou não e ão pode ter 02 com mesmo nome
				"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"//Mostra os dados em um Dashboard			
		}	
		
)
public class Runner {

}
