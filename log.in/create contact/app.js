let url  = window.location.href; 
//console.log(url);
let url_segment = url.split('?');
//console.log(url_segment[1]);


let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () => {
    if(video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play ();
})


let date = new Date();
let main_date = date.getDate();
// console.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) =>{
    if (el.innerText == main_date){
        el.classList.add('h6_active')
    } 
})

 let pvr = [
  {
     pvr: 'PVR Vegus',
     movie: 'Jawan',
     loc:'Dwarka sector 14 , New Delhi',
     audi: 1,
     type: '4DX',
     series: [ 'J', 'H', 'F', 'E', 'D', 'C', 'B', 'A' ],
     row_sections: 3,
     seat: 24,
     j: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
     h: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12 ],
     f: [ 5, 6, 15, 17, 18 ],
     e: [ 2, 7, 17, 18 ],
     d: [ 5, 16, 15, 23, 22 ],
     c: [ 1, 2, 78, 20, 23],
     b: [ 8, 5 ],
     a: [],
     price: [ 800, 800, 560, 560, 560, 560, 430, 430 ],
     date: 10,
     img: 'img/jawan.jpg',
     video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
     background: 'img/bg.png',
    },
   {
     pvr: 'PVR Vegus',
     movie: 'Gadar 2',
     loc:'Dwarka sector 14 , New  Delhi',
     audi: 2,
     type: '4DX',
     series: [ 'J', 'H', 'F', 'E', 'D',  'C', 'B', 'A' ],
     row_sections: 3,
     seat: 24,
     j: [ 3, 8, 21, 22, 9, 16, 18, 20, 13, 12, 15 ],
     h: [ 5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11] ,
     f: [ 1, 3, 13, 15, 22 ],
     e: [ 3, 9, 10, 20, 24 ] ,
     d: [ 7, 12, 9, 21, 20 ],
     c: [ 6, 8, 11, 12, 19 ],
     b: [ 8, 5, 12, 13, 14],
     a: [],
     price: [ 800, 800, 560, 560, 560, 560, 430, 430 ],
     date: 11,
    },
]
 


let data = pvr.filter(obj  => obj.date == main_date && obj.movie == url_segment[1])[0];
console.log(data);