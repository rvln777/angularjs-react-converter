# AngularJS File
<!DOCTYPE html>
<html lang="en-us" ng-app="weatherApp">
    <head>
        <title>AngularJS Weather Forecast SPA</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta charset="UTF-8">

        <!-- load bootstrap and fontawesome via CDN -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/angularjs-slider/6.0.0/rzslider.min.css" />
        <style>
            html, body, input, select, textarea
            {
                font-size: 1.05em !important;
            }
        </style>

        <!-- load angular via CDN -->
        <script src="//code.angularjs.org/1.6.1/angular.min.js"></script>
        <script src="//code.angularjs.org/1.6.1/angular-route.min.js"></script>
        <script src="//code.angularjs.org/1.6.1/angular-resource.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angularjs-slider/6.0.0/rzslider.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body>

        <header>
			<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="/">AngularJS Weather</a>
				</div>

				<ul class="nav navbar-nav navbar-right">
					<li><a href="#!"><i class="fa fa-home"></i>Home</a></li>

				</ul>
			</div>
			</nav>
		</header>

        <div class="container">
          <div ng-view ></div>

		</div>
    </body>
</html>

# React Files Summary:
1. **App.js**:
   - Main root component with routing.

2. **CityContext.js**:
   - React Context for managing the shared `city` state.

3. **Home.js**:
   - Home page component where users can input the city and navigate to the forecast page.
   - Converts `ng-model` to controlled inputs and navigation link to React Router's programmatic navigation.

4. **Forecast.js**:
   - Forecast page that fetches weather data and adjusts the forecast duration using a slider.
   - Displays weather details using React components.
   - Implements helper functions for date and temperature formatting.

# Context About AngularJS File
main index.html file
