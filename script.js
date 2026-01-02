// Data for Karachi, Pakistan (Estimated)
const ramadanStart = new Date("February 18, 2026 05:42:00").getTime();

// 1. Countdown Logic
function updateCountdown() {
    const now = new Date().getTime();
    const gap = ramadanStart - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerText = d > 0 ? d : 0;
    document.getElementById('hours').innerText = h > 0 ? h : 0;
    document.getElementById('minutes').innerText = m > 0 ? m : 0;
}
setInterval(updateCountdown, 1000);

// 2. Generate Calendar Data
function generateCalendar() {
    const tbody = document.getElementById('calendar-data');
    let startDate = new Date("February 18, 2026");
    
    // Karachi Timings (Average shift)
    let sehar = "05:42 AM";
    let iftar = "06:24 PM";

    for (let i = 1; i <= 30; i++) {
        const tr = document.createElement('tr');
        tr.className = "row-anim";
        tr.style.animationDelay = `${i * 0.05}s`;

        const options = { day: 'numeric', month: 'short' };
        let dateStr = startDate.toLocaleDateString('en-PK', options);

        tr.innerHTML = `
            <td>${i}</td>
            <td>${dateStr}</td>
            <td>${sehar}</td>
            <td>${iftar}</td>
        `;

        tbody.appendChild(tr);
        startDate.setDate(startDate.getDate() + 1);
    }
}

generateCalendar();
updateCountdown();