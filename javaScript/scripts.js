classs validator{
    constructor(){
        this.validator=[
            'data-main-length'

        ]
    }


    //iniciar a validação de todos os campos
    validatec(form){

        //pegar inputs
        let inputs= form.getElementByIdTagName("input");

        //transformo uma htmlcollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){

       //loop em todas as validações existentes 
       for(let i=0; this.validations.length > i; i++){
           //
       }

            console.log(input);
        });

    } 