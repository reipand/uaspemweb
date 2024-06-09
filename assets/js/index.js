document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobApplicationForm');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const umur = document.getElementById('umur').value;
        const alamat = document.getElementById('alamat').value;
        const posisi = document.getElementById('posisi').value;
        
        
        if (name && email && umur && alamta && position) {
            alert(`Lamaran berhasil dikirim! \nNama: ${name} \nEmail: ${email} \nUmur: ${umur} \nAlamat: ${alamat} \nPosisi: ${posisi}`);
        } else {
            alert('Harap isi semua bidang.');
        }
    });
});
