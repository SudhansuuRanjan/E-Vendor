#include <ESP8266WiFi.h>
#include <Servo.h>

Servo myservo1;
Servo myservo2;
Servo myservo3;
Servo myservo4;
Servo myservo5;  

int pos = 0; 
WiFiClient client;
WiFiServer server(80);

#define product1 D1
#define product2 D2
#define product3 D3
#define product4 D4
#define product5 D5

void setup() 
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  WiFi.begin("POCO", "Sudhanshu98");
  while(WiFi.status() != WL_CONNECTED)
  {
    delay(250);
    Serial.print("...\n");
  }
  Serial.println();
  Serial.println("NodeMCU is connected!");
  Serial.println(WiFi.localIP());
  server.begin();
  myservo1.attach(product1);
  myservo2.attach(product2);
  myservo3.attach(product3);
  myservo4.attach(product4);
  myservo5.attach(product5);
}

void loop() 
{
  // put your main code here, to run repeatedly:
  client = server.available();  //Gets a client that is connected to the server and has data available for reading.    
  if (client == 1)
  {  
    String request =  client.readStringUntil('\n');
    Serial.println(request);
    request.trim();
    if(request == "GET /servo1 HTTP/1.1")
    {
      for (pos = 0; pos <= 180; pos += 1) { 
         myservo1.write(pos);              
          delay(15);                       
          }
      for (pos = 180; pos >= 0; pos -= 1) { 
        myservo1.write(pos);              
        delay(15);                   
      }
    }

    
    if(request == "GET /servo2 HTTP/1.1")
    {
      for (pos = 0; pos <= 180; pos += 1) { 
         myservo2.write(pos);              
          delay(15);                       
          }
      for (pos = 180; pos >= 0; pos -= 1) { 
        myservo2.write(pos);              
        delay(15);                   
      }
    }

    
    if(request == "GET /servo3 HTTP/1.1")
    {
        for (pos = 0; pos <= 180; pos += 1) { 
         myservo3.write(pos);              
          delay(15);                       
          }
      for (pos = 180; pos >= 0; pos -= 1) { 
        myservo3.write(pos);              
        delay(15);                   
      }
    }

    
    if(request == "GET /servo4 HTTP/1.1")
    {
        for (pos = 0; pos <= 180; pos += 1) { 
         myservo4.write(pos);              
          delay(15);                       
          }
      for (pos = 180; pos >= 0; pos -= 1) { 
        myservo4.write(pos);              
        delay(15);                   
      }
    }

    if(request == "GET /servo5 HTTP/1.1")
    {
        for (pos = 0; pos <= 180; pos += 1) { 
         myservo5.write(pos);              
          delay(15);                       
          }
      for (pos = 180; pos >= 0; pos -= 1) { 
        myservo5.write(pos);              
        delay(15);                   
      }
    }
  }
}
