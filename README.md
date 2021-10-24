# Angular Sonarqube Integration Test

This is a mock boilerplate for Angular and SonarQube integration.

## Development environment

- Angular CLI version 12.2.8
- SonarQube version 9.1
- Sonar-scanner version 3.1.0
- Other related libraries are available to see on `package.json`

## Scripts available

### Generator

Please use Angular CLI [generator scripts](https://angular.io/cli/generate) for generating all boilerplates.

### Run development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Run code formatter check

Run `npm run prettier:check` to check if all files passed the style convention.

### Run build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Coverage report will be generated in the project's root file.

### Run unit tests

Run `ng test --code-coverage` to execute the unit tests via [Karma](https://karma-runner.github.io) while also generating code coverage for creating SonarQube report.

### Run sonar scanner

Run `npm run sonar` to scan all test report and send it to your [local SonarQube](##Local-SonarQube-integration) projects.

## Local SonarQube integration

This project is developed with SonarQube integration to check unit test coverage. To integrate the project with your local SonarQube, change project key, project name, host url value in `sonar-scanner.properties` file according to your own SonarQube project. If there is a requirement to login, add your project token into the properties file.

```properties
# default port is 9000, change it if you use different port
sonar.host.url=http://localhost:9000

# can be seen from SonarQube project information
# by default, project key and name are matched with repository name
sonar.projectKey=angular-sonarqube-integration-test
sonar.projectName=angular-sonarqube-integration-test

# must be the same token to your local project
sonar.login=your-project-token
```

## Husky config

Utilizing husky, this project encourages developer to only commit a clean code. It means the code has to be tested. The code should pass lint and karma test first before it can be commited.
