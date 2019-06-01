package Busca_Google;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Busca_Google {
	String url = "https://www.google.com.br";
	WebDriver driver;

			
	
	@Given("^Acesso o site do Google no \"([^\"]*)\" e digito \"([^\"]*)\"$")
	public void acesso_o_site_do_Google_no_e_digito(String browser, String termo) throws Throwable {
		switch (browser) {
		
		case "firefox":
			System.setProperty("webdriver.gecko.driver",
					"C:\\Users\\jbrigia\\fts119-workspace\\MultBrowser\\drivers\\firefox\\0.12.0\\geckodriver.exe");
			FirefoxOptions ffOptions= new FirefoxOptions();
			ffOptions.setBinary("C:\\Users\\jbrigia\\fts119-workspace\\MultBrowser\\drivers\\firefox\\0.12.0\\geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(400, TimeUnit.SECONDS);		
			break;
			case "chrome":
				System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\jbrigia\\fts119-workspace\\MultBrowser\\drivers\\chrome\\74\\chromedriver.exe");
			driver = new ChromeDriver();
			break;
			
							
			case "ie":
				System.setProperty("webdriver.ie.driver",
						"C:\\Users\\jbrigia\\fts119-workspace\\MultBrowser\\drivers\\ie\\32\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();
				driver.manage().timeouts().implicitlyWait(400, TimeUnit.SECONDS);	
				break;
					
		}
					
		
		
		driver.manage().timeouts().implicitlyWait(240, TimeUnit.SECONDS);		
		driver.get(url);
		driver.findElement(By.name("q")).clear();
		driver.findElement(By.name("q")).sendKeys(termo);
	}

	@And("^Pressiona Enter$")
	public void pressiona_Enter() throws Throwable {
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	@Then("^Exibe a pagina com o titulo \"([^\"]*)\"$")
	public void exibe_a_pagina_com_o_titulo(String resultado) throws Throwable {
        assertEquals(resultado,driver.getTitle());
        driver.quit();
	}


}

