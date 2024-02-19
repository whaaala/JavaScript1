'use strict';

class LoginView{

    _btnform = document.querySelector('.form');
    
    addLoginHandler(handler){
        this._btnform.addEventListener('click', function(e){
            e.preventDefault();
            
            const btn = e.target.closest('.login__button');
            if(!btn) return;

            const formData = new FormData(this);
            const objOfInputData = {}
            formData.forEach(function(value, key){
                objOfInputData[key] = value
            });

            handler(objOfInputData);
        });
    }
}

export default new LoginView();
