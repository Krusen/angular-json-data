# Introduction
This is a directive for easy loading of JSON directly from the HTML.
With this directive you can include initial data in the HTML sent to the client instead of lazy-loading 
the data by doing one or more requests after the page has loaded to a webservice or such.

# Installation

You can install this through bower.

```
bower install angular-json-data
```

You then need to include `json-data` as a dependency for your angular app.

```JS
// Add 'json-data' as a dependency for your app
var app = angular.module("MyApp", ["json-data"]);
```

# Usage
Below are some examples of how to use the directive.

```HTML
<!-- Use the 'model' attribute to store the data in a property on your controller -->
<json-data model="vm.movies">
    [
        { "title": "Warcraft: The Beginning", year: 2016 },
        { "title": "Star Trek: Beyond", year: 2016 }
pre    ]
</json-data>
```

You can use the `callback` attribute to be notified when the directive have been initialized and the data loaded.

The `data` variable will be substituted with the loaded data, but you don't have to include it.

```HTML
<!-- Will call vm.onMovieLoaded() with the JSON object when initialized -->
<json-data callback="vm.onMovieLoaded(data)">
    {
        "title": "Warcraft: The Beginning",
        "year": 2016,
        "imdbScore": 7.5,
        "cast": [
            "Travis Fimmel",
            "Paula Patton",
            "Ben Foster",
            "Dominic Cooper"
        ],
        "director": "Duncan Jones"
    }
</json-data>
```

You can also combine the two if you want to.

```HTML
<json-data model="vm.movies" callback="vm.onMoviesLoaded()">
    <!-- ... -->
</json-data>
```

All valid JSON can be used - objects, arrays and simple types.

```HTML
<!-- You can store objects, arrays or simple types - all valid JSON can be used -->
<json-data model="vm.count">5</json-data>
<json-data model="vm.userName">"Krusen"</json-data>
<json-data model="vm.isAdmin">true</json-data>

<!-- 'when-all-initialized' attribute will be called when all surrounded json-data directives has been initialied -->
<json-data when-all-initialized="vm.onAllLoaded()">
    <json-data>
        <!-- ... -->
    </json-data>
    <json-data>
        <!-- ... -->
    </json-data>
</json-data>
```

By default the directive/element will be removed from the DOM after it has been initialized.
If you do not want this behavior you can add a `keep-element` attribute.

```HTML
<!-- This will stay in the DOM after being initialized -->
<json-data model="vm.data" keep-element>
    <!-- ... -->
</json-data>
```