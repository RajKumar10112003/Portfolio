var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }   

        var skill=document.getElementsByClassName("skill-col");
        var col = document.getElementsByClassName("skill-col-1");
        function tab(tabname) {
            for (skills of skill) {
                skills.classList.remove("skill-link");
            }
            for (cols of col) {
                cols.classList.remove("active-skill");
            }
            event.currentTarget.classList.add("skill-link");
            document.getElementById(tabname).classList.add("active-skill");
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            const images = document.querySelectorAll('.projectImage');
            const popup = document.getElementById('popup');
            const close = document.querySelector('.close');
            const popupTitle = document.getElementById('data-title');
            const popupDescription = document.getElementById('data-description');
            const popupImage = document.getElementById('data-image');
        
            images.forEach(image => {
                image.addEventListener('click', () => {
                    const title = image.getAttribute('data-title');
                    const description = image.getAttribute('data-description');
                    const imagesrc = image.getAttribute('data-image');
                    
                    popupTitle.textContent = title;
                    popupDescription.textContent = description;
                    popupImage.src=imagesrc
                    popup.style.display = 'block';
                });
            });
        
            close.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        
            window.addEventListener('click', (event) => {
                if (event.target == popup) {
                    popup.style.display = 'none';
                }
            });
        });

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}
