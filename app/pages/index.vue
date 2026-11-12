<script setup lang="ts">
useSeoMeta({
  title: "We're Working | Net Jon",
  description:
    "Net Jon is building a new website. Soon, a clear, fast and secure digital presence.",
  ogTitle: "We're Working | Net Jon",
  ogDescription:
    "We're building Net Jon's new website. Coming soon online.",
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
})
</script>

<template>
  <main class="coming-soon">
    <div class="page-shell">
      <header class="site-header">
        <a class="wordmark" href="/" aria-label="Net Jon, homepage">
          <span class="wordmark-symbol" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M5 10h10l5 6-5 6H5" />
              <path d="M12 10h10l5 6-5 6h-3" />
            </svg>
          </span>
          <span>net jon</span>
        </a>

        <div class="header-note">
          <span class="status-dot" aria-hidden="true"></span>
          <span>New website taking shape</span>
        </div>
      </header>

      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="eyebrow-line" aria-hidden="true"></span>
            Digital engineering &amp; online presence
          </p>

          <h1 id="hero-title">
            We're working
            <span class="headline-line">on the new website<span class="signal-dot">.</span></span>
          </h1>

          <p class="hero-description">
            We're building a new space for your digital presence.
            Coming soon, online.
          </p>

          <div class="hero-footnote">
            <span class="footnote-mark" aria-hidden="true">↗</span>
            <span>A partner for every step online.</span>
          </div>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="art-caption">
            <span>NET JON</span>
            <span>01 — 03</span>
          </div>

          <div class="orbit orbit-outer"></div>
          <div class="orbit orbit-inner"></div>
          <div class="orbit-core">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M10 21h20l10 11-10 11H10" />
              <path d="M24 21h20l10 11-10 11h-7" />
            </svg>
          </div>
          <span class="orbit-node orbit-node-top"></span>
          <span class="orbit-node orbit-node-right"></span>
          <span class="orbit-node orbit-node-bottom"></span>

          <div class="art-label art-label-left">
            <span class="art-label-index">01</span>
            <span>PRESENCE</span>
          </div>
          <div class="art-label art-label-right">
            <span class="art-label-index">02</span>
            <span>PERFORMANCE</span>
          </div>
          <div class="art-label art-label-bottom">
            <span class="art-label-index">03</span>
            <span>SECURITY</span>
          </div>

          <span class="art-cross art-cross-one">+</span>
          <span class="art-cross art-cross-two">+</span>
          <span class="art-coordinate">42° 39' 45.0"N</span>
        </div>
      </section>

      <footer class="site-footer">
        <span>Websites. Applications. Infrastructure.</span>
        <span class="footer-right">NET JON <span aria-hidden="true">/</span> 2026</span>
      </footer>
    </div>
  </main>
</template>
