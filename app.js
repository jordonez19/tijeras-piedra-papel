    function jugar(){
        let inputNumJugador = document.getElementById('numJugador');
        let valueNumJugador = inputNumJugador.value;

        function jugador(num){
            let juego = {
                1:'tijeras',
                2:'piedra',
                3:'papel'
            }
            jugada = juego[num];
            return jugada;
        }
        
        function maquina(min, max){
            let maquina = {
                1:'tijeras',
                2:'piedra',
                3:'papel'
            }
            let resultadoRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
            let jugadaMaquina = maquina[resultadoRandom];
            return jugadaMaquina;
        }
        let resultadoMaquina = maquina(1,3);
        let resultado;
        let player = jugador(valueNumJugador);
        
        if(player === 'piedra' && resultadoMaquina === 'papel' ){
            resultado = 'Perdiste';
        }else if(player === 'papel' && resultadoMaquina === 'tijeras' ){
            resultado = 'Perdiste';
        }else if(player === 'tijeras' && resultadoMaquina === 'piedra' ){
            resultado = 'Perdiste';
        }else if(player === 'piedra' && resultadoMaquina === 'tijeras' ){
            resultado = 'Ganaste';
        }else if(player === 'papel' && resultadoMaquina === 'piedra' ){
            resultado = 'Ganaste';
        }else if(player === 'tijeras' && resultadoMaquina === 'papel' ){
            resultado = 'Ganaste';
        }else{
            resultado = 'Empate';
        }

        const maquinajuego = document.getElementById('maquinajuego');
        const userjuego = document.getElementById('userjuego');
        const juegoFinal = document.getElementById('resultado');
        juegoFinal.innerHTML = resultado;
        userjuego. innerHTML = player;
        maquinajuego. innerHTML = resultadoMaquina;
    
    }







/* 
juego(piedra, maquina)


switch(jugador){

    case piedra:
    case tijeras:
    case papel:
    piedra == piedra;
    answer = 'Empate';
    break;
    case piedra:
    case tijeras:
    case papel:
    tijeras == tijeras;
    answer = 'Empate';
    break;
    case piedra:
    case tijeras:
    case papel:
    papel == papel;
    answer = 'Empate';
    break;
}
 */