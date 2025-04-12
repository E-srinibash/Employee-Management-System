FROM openjdk:17
WORKDIR /usr/app
COPY target/ems-backend.jar .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "ems-backend.jar"]
