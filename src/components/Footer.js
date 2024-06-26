function Footer() {
  return (
    <>
<div class="container-lg bg-dark rounded">
  <footer class="py-3 my-3">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/accueil" class="nav-link px-3 text-light">Accueil</a></li>
      <li class="nav-item"><a href="/formulaire" class="nav-link px-3 text-light">Contact</a></li>
      <li class="nav-item"><a href="/reparation" class="nav-link px-3 text-light">Billetterie</a></li>
      <li class="nav-item"><a href="/connexion" class="nav-link px-3 text-light">À propos</a></li>
      <div class="dropdown">
  <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Nos horaires d'ouverture
  </button>
  <ul class="dropdown-menu">
    <li><span class="dropdown-item-text">Lundi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Mardi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Mercredi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Jeudi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Vendredi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Samedi : 09:00 - 13:00</span></li>

  </ul>
</div>
    </ul>
    <p class="text-center text-light">© Arcadia Zoo de Brocéliande.</p>

  </footer>
</div>

    </>
  );
}

export default Footer;