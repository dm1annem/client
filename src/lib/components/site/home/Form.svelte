<script>
    let name;
    let foneNumber;

</script>

<div>
    <div class="grid">
        <form>
            <input type="text"  placeholder="Имя" bind:value={name}>
            <input type="tel" placeholder="Телефон" bind:value={foneNumber}>
            <button>Оставить заявку</button>

        </form>
    </div>
    
</div>