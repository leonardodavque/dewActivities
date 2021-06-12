class Window {

    

    constructor(options={}){

        this.width = options.width || 120
        
        this.height = options.height || 150;
        this.posX = options.posX || 150;
        this.posY = options.posY || 150;

        this.el = document.createElement('div');
        this.el.style.width = this.width +'px';
        this.el.style.height= this.height + 'px';
        this.el.style.top= this.posX + 'px';
        this.el.style.left= this.posY + 'px';

       
        this.el.style.position='absolute';

        this.el.style.backgroundColor = 'blue';

        document.body.appendChild(this.el); 

       
    }

    setTitle(title){
        this.el.innerText= title;
        console.log(title);
    }
    

}

class Calculator extends Window{
    constructor(options = {}){
        super();

        var totalDiv = document.createElement('div');
        var numeric = document.createElement('div');
                
        var num1='';
        var num2='';
        var operation='';
        var total='';


        

        totalDiv.innerHTML='<input class="display" style="margin-bottom:10px; margin-top:10px">';

        numeric.innerHTML = '<button class="number-button" data-loquetedelagana="1">1</button>\
            <button class="number-button" data-loquetedelagana="2">2</button>\
            <button class="number-button" data-loquetedelagana="3">3</button>\
            <button class="number-button" data-loquetedelagana="+">+</button>\
            <button class="number-button" data-loquetedelagana="4">4</button>\
            <button class="number-button" data-loquetedelagana="5">5</button>\
            <button class="number-button" data-loquetedelagana="6">6</button>\
            <button class="number-button" data-loquetedelagana="-">-</button>\
            <button class="number-button" data-loquetedelagana="7">7</button>\
            <button class="number-button" data-loquetedelagana="8">8</button>\
            <button class="number-button" data-loquetedelagana="9">9</button>\
            <button class="number-button" data-loquetedelagana="*">*</button>\
            <button class="number-button" data-loquetedelagana=".">.</button>\
            <button class="number-button" data-loquetedelagana="0">0</button>\
            <button class="number-button" data-loquetedelagana="=">=</button>\
            <button class="number-button" data-loquetedelagana="/">/</button>\
            <button class="number-button" style=" text-align:center" data-loquetedelagana="C">C</button>\
            ';


        //cont.appendChild(content);
        this.el.appendChild(totalDiv);

        this.el.appendChild(numeric);

       // this.box.appendChild(cont);
        
        
       // console.log(this.box);
        console.log(this.el);

        this.display = totalDiv.querySelector('.display');
        function buttonClick(e) {

            if(num1==''){
                this.value='';
                
            }

            if(operation==''){
                num1 += e.target.dataset.loquetedelagana;
                this.value +=  e.target.dataset.loquetedelagana;
                
                
            }else{

                num2 += e.target.dataset.loquetedelagana;
                this.value +=  e.target.dataset.loquetedelagana;
            }
            
            if(e.target.dataset.loquetedelagana == 'C'){
                this.value='';
                clear();

            }else if(e.target.dataset.loquetedelagana == '+'){
                this.value='';
                operation='+';
                
            }
            else if(e.target.dataset.loquetedelagana == '-'){
                this.value='';
                operation='-';
                
            }
            else if(e.target.dataset.loquetedelagana == '*'){
                this.value='';
                operation='*';
                
            }else if(e.target.dataset.loquetedelagana == '/'){
                this.value='';
                operation='/';
                
            }else if(e.target.dataset.loquetedelagana == '='){

                this.value='';

                if(operation=='+'){
                    //not mix type of variables
                    total=parseFloat(num1)+parseFloat(num2);
                    this.value=String(total);
                }
                if(operation=='-'){
                    //not mix type of variables
                    total=parseFloat(num1)-parseFloat(num2);
                    this.value=String(total);
                }
                if(operation=='*'){
                    //not mix type of variables
                    total=parseFloat(num1)*parseFloat(num2);
                    this.value=String(total);
                }
                if(operation=='/'){
                    //not mix type of variables
                    total=parseFloat(num1)/parseFloat(num2);
                    this.value=String(total);
                }

                clear();
                
            }
            
        }
        numeric.querySelectorAll('.number-button').forEach(button =>
            button.addEventListener('click', buttonClick.bind(this.display))
        );

        function clear(){
            num1='';
            num2='';
            total='';
            operation='';
        }

    }
    
}
