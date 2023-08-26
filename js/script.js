<script>
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('a[href="#sobre"]').addEventListener('click', function (e) {
            e.preventDefault(); 
            const sobreSection = document.getElementById('sobre');
            const sobreSectionTop = sobreSection.getBoundingClientRect().top;

            window.scrollBy({
                top: sobreSectionTop,
                behavior: 'smooth'
            });
        })
    })
</script>
