document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 5000; // Kecepatan animasi (semakin kecil semakin cepat)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed; // Membagi angka target untuk mendapatkan increment kecil

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Ulangi setiap 10ms
            } else {
                counter.innerText = target; // Pastikan angka akhir sama dengan target
            }
        };

        updateCount();
    });
});
