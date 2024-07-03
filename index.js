document.addEventListener('DOMContentLoaded', function() {
    const cinnamotchi = 'imgs/cinnamotchi.jpeg';
    let progress = 0;

    //BRON: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
    const eatSound = document.getElementById('eatSound');
    const sleepSound = document.getElementById('sleepSound');
    const flySound = document.getElementById('flySound');
    const vibeSound = document.getElementById('vibeSound');

    //ChatGPT
    //Prompt: Hoe zorg ik ervoor dat cinnamotchi.jpg default wordt?
    function resetImage() {
        if (progress < 100) {
            document.querySelector('img').src = cinnamotchi;
        }
    }

    function increaseProgress() {
        let bar = document.getElementById("myBar");
        if (progress < 100) {
            progress += 10;
            bar.style.width = progress + '%';
            if (progress === 100) {
                document.querySelector('img').src = 'imgs/yay.jpeg';
            }
        }
    }

    function playSound(audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    document.getElementById('eatBtn').addEventListener('click', function() {
        console.log("Cinnamotchi is eating!");
        document.querySelector('img').src = 'imgs/eat.jpeg';
        playSound(eatSound);
        increaseProgress();
        setTimeout(resetImage, 1000);
    });

    document.getElementById('sleepBtn').addEventListener('click', function() {
        console.log("Cinnamotchi is sleeping!");
        document.querySelector('img').src = 'imgs/sleep.jpeg';
        playSound(sleepSound);
        increaseProgress();
        setTimeout(resetImage, 1000);
    });

    document.getElementById('flyBtn').addEventListener('click', function() {
        console.log("Cinnamotchi is flying!");
        document.querySelector('img').src = 'imgs/fly.jpeg';
        playSound(flySound);
        increaseProgress();
        setTimeout(resetImage, 1000);
    });

    document.getElementById('vibeBtn').addEventListener('click', function() {
        console.log("Cinnamotchi is vibing!");
        document.querySelector('img').src = 'imgs/music.jpeg';
        playSound(vibeSound);
        increaseProgress();
        setTimeout(resetImage, 1000);
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
        console.log("Resetting Cinnamoroll!");
        progress = 0;
        document.getElementById("myBar").style.width = '0%';
        document.querySelector('img').src = cinnamotchi;
    });
});
