// Récupérer l'URL actuelle
var currentUrl = window.location.href;

// Vérifier si l'URL se termine par ".html"
if (currentUrl.endsWith(".html")) {
  // Construire la nouvelle URL sans l'extension ".html"
  var newUrl = currentUrl.slice(0, -5);

  // Modifier l'URL affichée dans la barre d'adresse
  window.history.pushState({}, '', newUrl);
}