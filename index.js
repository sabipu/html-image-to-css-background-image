// Immediately invoked functional expression to wrap function
(function() {
  // Constructor
  this.CSSBackgroundImage = function() {
    // Create global element references
    this.imageStyle = null;
    this.className = null;

    // Define option defaults
    var defaults = {
      className: 'bg-image',
      imageStyle: 'cover'
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    buildOut.call(this);
  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function buildOut() {
    let x = document.querySelectorAll(this.options.className);
    for (let i = 0; i < x.length; i++) {
      var image = x[i].getElementsByTagName('img')[0];
      image.style.display = 'none';
      x[i].style.backgroundImage = 'url(' + image.src + ')';
    }
  }
}());