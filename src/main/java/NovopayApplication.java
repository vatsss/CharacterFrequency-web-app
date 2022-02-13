import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.novopay")
public class NovopayApplication {

	public static void main(String[] args) {
		SpringApplication.run(NovopayApplication.class, args);
	}

}
