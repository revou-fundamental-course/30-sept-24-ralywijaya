function validasiform(){
    console.log("berhasil")
    const inputsuhu = document.getElementById('input-suhu').value;
    console.log(inputsuhu);
   
   
    if( inputsuhu ==''){
        alert('inputan anda kosong');
    }
    else{kalkulus(inputsuhu);

    }
};

function kalkulus(value){
    let rumus = parseInt(value)*(9/5)   + 32 ;
    document.getElementById('textfahrenheit').value=rumus;
    document.getElementById('textkalkulus').value=value = value + ' x( 9/4 )+ 32 = ' + rumus;

}
function reset(){
    document.getElementById('input-suhu').value = '';
    document.getElementById('textfahrenheit').value='';
    document.getElementById('textkalkulus').value='';
};

function reverse(){
    document.getElementById('input-suhu').value;
    document.getElementById('textfahrenheit').value=rumus;
    document.getElementById('textkalkulus').value= value + ' x( 9/4 )+ 32 = ' + rumus;
};










