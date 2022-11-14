<script>
    import "../app.css";
    import Header from "$lib/components/layouts/header/Header.svelte";
    import Footer from "$lib/components/layouts/footer/Footer.svelte";
</script>

<div>
    <Header/>
</div>

<div class="flex-auto">
    <slot/>   
</div>

<div>
    <Footer/>
</div>
