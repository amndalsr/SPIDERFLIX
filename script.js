$('.carrosel').carrosel({
    loop: false,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            item:1
        },
        600:{
            item: 3
        },
        1000:{
            item: 5
        }
    }
})