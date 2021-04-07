# Integrate Sonar Qube
Step 1 - 
Download JDK [link.](https://www.oracle.com/in/java/technologies/javase-jdk11-downloads.html)
Install JDK.
Windows - Add JDK path to environmental variables.
Mac - @pravin / @hemant please add step for Mac OS

Step 2 -
Installing a local instance of SonarQube [link.](https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)

Add JDK path in sonarqube-7.9.6/conf/wrapper.conf as below
wrapper.java.command=C:\Program Files\Java\jdk1.8.0_77\bin\java
#wrapper.java.command=java

Step 3 -
Download & Install sonarqube-scanner [link.](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)

Step 4 -
Run SonarQube server on your local machine 
Windows - Go to the SonarQube installed directory "sonarqube-7.9.6\bin\windows-x86-64" the run "StartSonar.bat" file.

Step 5 - 
Run Sonar Scanner on your local machine from the project directory
$ sonar-scanner.bat -D"sonar.projectKey=js-methods" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=492b75314be5f2ac384fe7697fa03205db9c4ac6"

Step 6 - Go to SonarQube Dashboard which is running on [link](http://localhost:9000/projects/create) & Create new project. Add "Project key" which is mentioned in "sonar-project.properties" file. After the new project is created, you can view the results.

Referred below pages for setting up the Sonarqube:
SonarQube | SonarScanner : a step by step guide. [link](https://medium.com/swlh/sonarqube-sonarscanner-setup-1a633b654828

Mocha Code Coverage: How to Use Istanbul to Get Going [link](https://www.testim.io/blog/mocha-code-coverage-how-to-use-instanbul-to-get-going/)
