


class Page {

    
    static columna = document.getElementsByClassName('columna');
    static info = document.getElementById('info');
    
    
    static show(num){
        if (num == 1){
            this.columna[2].style.display = 'flex';
            this.columna[0].style.display = 'none';
            this.columna[1].style.display = 'none';
        } else if(num == 2){
            this.columna[0].style.display = 'flex';
            this.columna[1].style.display = 'none';
            this.columna[2].style.display = 'none';
        } else if (num == 3){
            this.columna[0].style.display = 'none';
            this.columna[2].style.display = 'none';
            this.columna[1].style.display = 'flex';
        }
        
    }

    
    static showAll(){
    
        for(let i=0; i<this.columna.length; i++ ){
            this.columna[i].style.display = 'flex';
        }
    
    }


    static showInfo(){
        for(let i=0; i<this.columna.length; i++ ){
            this.columna[i].style.display = 'none';
        }

        this.info.style.display = 'flex';
        

    }


    
}

