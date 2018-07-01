
//execute the funtion inside ready() when the document/html is loaded/ready
$(document).ready(function() {

  var cityName;
  console.log(cityName);

  //change background based on file name.
  var changeBackground = function(fileName) {
    $('body').css('background-image', 'linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)), url(images/' + fileName + ')');
    
  };
  //on key up, store user input as cityName, this can potentially be pretty problematic though because pressing enter counts as both a keyup and a submit
  $('input[type=text]').keyup(function() {
    cityName = $(this).val().toLowerCase();
  });

  //on submit, change background to the input bg.
  $('form').submit(function() {
    console.log('submit is pressed!!');
    //tell the sumbit event to not perform the default behavoirs.
    event.preventDefault();

    // you can also do the cityName value assignment here, more graceful
    // find contents of input#city-name
    // save to cityName

    switch (cityName) {
      // you can stack cases because there's no break; in between cases here.
      case 'nyc':
      case 'new york':
      case 'new york city':
        //if you do remove & add, you need to remove all classes prior to all add's
        changeBackground('nyc.jpg');
        break;
      case 'sf':
      case 'san francisco':
      case 'bay area':
        changeBackground('sf.jpg');
        break;
      case 'la':
      case 'lax':
        changeBackground('la.jpg');
        break;
      case 'austin':
      case 'atx':
        changeBackground('austin.jpg');
        break;
      case 'syd':
      case 'sydney':
        changeBackground('sydney.jpg');
        break;
      case undefined:
      case '':
        $('#system-msg').text('Please enter a city name');
        break;
      default:
        $('#system-msg').text('Sorry, we dont support this city...');
    }
  });
});

