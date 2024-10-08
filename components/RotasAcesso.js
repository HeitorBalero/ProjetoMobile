import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import login from './Login';
import Rotas from './Rotas';
import Home from './Home';
import Cadastrar from './CadastrarRefeicao';
import Alterar from './AlterarRefeicao';

const Stack = createStackNavigator();

export default function RotasAcesso() {
    return(
        <Stack.Navigator>
            
                <Stack.Screen name="Login" component={login} options={{headerShown:false}} />
            <Stack.Screen name="Rotas" component={Rotas}/>
        </Stack.Navigator>
    );
}
