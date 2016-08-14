jQuery(document).ready(function(){ 
  jQuery.get("promo.html", function(data) {
    jQuery("#promo").html(data);
  });
}); 