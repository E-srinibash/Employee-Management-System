
FROM openjdk:17
COPY target/ems-backend.jar /usr/app
WORKDIR /usr/app/
EXPOSE 8080
ENTRYPOINT ["java","-jar","ems-backend.jar"]