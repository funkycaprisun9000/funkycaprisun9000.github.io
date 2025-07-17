    const catalogue = {
        "chapter 3 & 4": [
            {title:"13 am", file:"soundtrack/13am.mp3"},
            {title:"airwaves", file:"soundtrack/airwaves.mp3"},
            {title:"Another day in hometown", file:"soundtrack/Another_day_in_hometown.mp3"},
            {title:"Black Knife", file:"soundtrack/Black_Knife.mp3"},
            {title:"Castle Funk", file:"soundtrack/Castle_Funk.mp3"},
            {title:"Dark Place", file:"soundtrack/Dark_Place.mp3"},
            {title:"Dark Sanctuary", file:"soundtrack/Dark_Sanctuary.mp3"},
            {title:"Friends" , file:"soundtrack/Friends.mp3"},
            {title:"From Now On", file:"soundtrack/From_Now_On.mp3"},
            {title:"Glowing Snow", file:"soundtrack/GlowingSnow.mp3"},
            {title:"GUARDIAN", file:"soundtrack/GUARDIAN.mp3"},
            {title:"Green Room", file:"soundtrack/GreenRoom.mp3"},
            {title:"Hammer of Justice", file:"soundtrack/Hammer_of_Justice.mp3"},
            {title:"Need a hand ?", file:"soundtrack/Need_a_hand.mp3"},
            {title:"Neverending Night", file:"soundtrack/Neverending_Night.mp3"},
            {title:"Old wooden rafters", file:"soundtrack/Old_wooden_rafters.mp3"},
            {title:"Piano that may not be played that well", file:"soundtrack/Piano_that_may_not_be_played_that_well.mp3"},
            {title:"Ruder Buster", file:"soundtrack/Ruder_Buster.mp3"},
            {title:"The place where it rained", file:"soundtrack/The_place_where_it_rained.mp3"},
            {title:"The Second Sanctuary", file:"soundtrack/The_Second_Sanctuary.mp3"},
            {title:"The Third Sanctuary", file:"soundtrack/The_Third_Sanctuary.mp3"},
            {title:"TV TIME!", file:"soundtrack/tvtime.mp3"},
            {title:"TV WORLD", file:"soundtrack/tvworld.mp3"},
            {title:"Up ur Bat", file:"soundtrack/UpurBat.mp3"},
            {title:"Wise words", file:"soundtrack/Wise_words.mp3"}
        ]
    };

    const select = document.getElementById("musicSelect");
    const player = document.getElementById("player");
    const muteButton = document.getElementById("muteButton");
    const chapterSelect = document.getElementById("chapterSelect");
    
    Object.keys(catalogue).forEach(chap =>{
        const opt = new Option(chap,chap);
        chapterSelect.add(opt)
    })


    chapterSelect.addEventListener("change", () => {
      const chap = chapterSelect.value;
      const tracks = catalogue[chap];

      select.length = 0;

      tracks.forEach((t,i)=>{
        const opt = new Option(t.title,t.file);
        if(i===0) opt.selected=true;
        select.add(opt);
      } );
      loadAndPlay(select.value);

     });
    musicSelect.addEventListener("change",()=>{
        loadAndPlay(musicSelect.value);
        
    });
     
     
     function loadAndPlay(src){
        player.src = src;
        player.play().catch(()=>{});
     }

    muteButton.addEventListener("click", () => {
      player.muted = !player.muted;
      muteButton.textContent = player.muted ? "🔊 Unmute" : "🔇 Mute";
    });


    window.addEventListener("DOMContentLoaded",()=>{
        chapterSelect.selectedIndex = 0; 
        chapterSelect.dispatchEvent(new Event("change"));
    })




    // Animation de personnages qui passent de temps en temps
    const chars = ["Fun_gankg_sneaky.gif", "lancer_walk.gif", "krisnsusie_run.gif", "Toriel_overworld_walking_Kris.gif", "Ralsei_overworld_float.gif", "TopChef.gif", "Kris_overworld_run_sword.gif", "DarkWorldNpc.gif", "Queen_overworld_run.gif", "Susie_overworld_run.gif"];
    setInterval(() => {
      const img = document.createElement("img");
      img.src = "images/" + chars[Math.floor(Math.random() * chars.length)];
      img.className = "walker";
      document.body.appendChild(img);
      setTimeout(() => img.remove(), 8000);
    }, 15000);
