<template>
  <div id="app">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="#" class="navbar-link">
                Languages
              </a>
              <div class="navbar-dropdown">
                <a href="#" class="navbar-item">English</a>
                <a href="#" class="navbar-item">Français</a>
              </div>
            </div>
          </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
