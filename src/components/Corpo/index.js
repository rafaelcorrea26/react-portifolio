import CardApresentacao from '../CardApresentacao';
import CardContrateMe from '../CardContrateMe';
import CardProjetos from '../CardProjetos';
import CardSobre from '../CardSobre';
import './Corpo.css';

const Corpo = () => {
    return (
        <main class="wrapper">
            <CardApresentacao/>
            <CardSobre/>
            <CardProjetos/>
            <CardContrateMe/>
        </main>    
    )

}
export default Corpo;