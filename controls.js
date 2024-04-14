class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){// hastag is placed as it is a private method
        //add keybound event listeners
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'w':
                    this.forward = true;
                    break;
                case 'a':
                    this.left = true;
                    break;
                case's':
                    this.reverse = true;
                    break;
                case 'd':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                     break;
            }
            console.table(this);//will help with debugging
        }
        

        document.onkeyup=(event)=>{
            switch(event.key){
                case 'w':
                    this.forward = false;
                    break;
                case 'a':
                    this.left = false;
                    break;
                case's':
                    this.reverse = false;
                    break;
                case 'd':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
            }
            console.table(this);//will help with debugging
        }
        
    }
}