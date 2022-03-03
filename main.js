window.onload = function(){

    let h1Tag = document.querySelector('.h1');
    let h1 = document.querySelector('.h1').innerHTML;



    h1Tag.innerHTML = '';
    
    for (let i=0;i<h1.length;i++) {

        setTimeout(function(){
            h1Tag.innerHTML = h1Tag.innerHTML + h1[i];
        },150 * i );

    }

    let page = 0;
    let lastPage = document.querySelectorAll('.content').length; 
    let mHtml = $('html');
    let menuBtn = document.querySelector('.menu-button');
    let content = document.querySelectorAll('.content');
    

    $(window).on('wheel',function(e){
        
        if(mHtml.is(":animated")) return;
        
        
        if(e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;
            page++;

        }else {
            if(page == 0) return;
            page--;
            
        }
  

        var posTop = page * $(window).height();
        mHtml.animate({scrollTop : posTop},500);
        
        let header = document.querySelector('.header a');
        
        if (page > 0) {
            menuBtn.style.color = 'orange';
            header.style.color = 'orange';
            content[page-1].classList.add('fadeIn');
            if (page == 6) {
                header.style.color ='white'
            }
        } else {
            menuBtn.style.color = 'white';
            header.style.color = 'white';
        }

        let ani = document.querySelector('.itsme');
        
        if (page == 1) {
            console.log(1)
            ani.classList.add('itsme_ani')
        }


    });
    
    $('.menu-content p').on('click',function(){
        page = $(this).index();
        var posTop = page * $(window).height();
        mHtml.animate({scrollTop : posTop},500);
        content[page-1].classList.add('fadeIn');
    })
    

  

    let burger = document.querySelector('.menu-trigger');
    let sideMenu = document.querySelector('.menu-content');
    let close = document.querySelector('.close');

    burger.addEventListener('click',function(){

        sideMenu.style.right = '0';
        burger.style.opacity = '0';
    });
    close.addEventListener('click',function(){
        sideMenu.style.right = '-300px';
        burger.style.opacity = '1';
    });

      
    let skillsBtn = document.querySelectorAll('.skills_button p');
    let skillsCon = document.querySelectorAll('.skills_img');


    skillsBtn.forEach(function(btn,key){
     
        btn.addEventListener('click',function(){

            skillsCon.forEach(function(btn2,key2){
                skillsCon[key2].classList.remove('show');
                skillsBtn[key2].classList.remove('active');
            });

            skillsCon[key].classList.add('show');
            skillsBtn[key].classList.add('active');

        });
  
    });

    let profileBtn = document.querySelector('.profileBtn');
    let profile = document.querySelector('.profile');

    profile.addEventListener('click',function(){
        profile.style.display = 'none';
    })
    profileBtn.addEventListener('click',function(){
        profile.style.display = 'block';
    })



}
