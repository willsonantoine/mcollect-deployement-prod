let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  // Afficher une bannière d'installation après 3 secondes
  setTimeout(() => {
    if (confirm("Voulez-vous installer cette application ?")) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('L\'utilisateur a installé l\'application.');
        } else {
          console.log('L\'utilisateur a refusé l\'installation.');
        }
        deferredPrompt = null;
      });
    }
  }, 3000);
});
