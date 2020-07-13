import React from 'react';

import Card from './components/layout/Card';

import Draw from './components/draw/Draw';
import Counter from './components/counter/Counter';
import Input from './components/form/Input';
import IndirectParent from './components/communication/IndirectParent';
import Parent from './components/communication/Parent';
import UserInfo from './components/conditional/UserInfo';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import TableProducts from './components/repeat/TableProducts';
import ListStudents from './components/repeat/ListStudents';
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMember';
import Random from './components/basic/Random';
import Fragment from './components/basic/Fragment';
import Fisrt from './components/basic/First';
import Second from './components/basic/Second';

import './index.css';
import './App.css';

export default () => (
    <div>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card title="#13 - Challenge Draw" color="#E1DB19">
                <Draw />
            </Card>

            <Card title="#12 - Counter" color="#010D89">
                <Counter number={10} />
            </Card>

            <Card title="#11 - Controlled Component" color="#666263">
                <Input />
            </Card>

            <Card title="#10 - Communication Indirect" color="#5F8726">
                <IndirectParent />
            </Card>

            <Card title="#09 - Communication Direct" color="#2D1E1E">
                <Parent />
            </Card>

            <Card title="#09 - User Info" color="#802E3C">
                <UserInfo user={{ name: "Anderson" }} />
            </Card>

            <Card title="#08 - Even or Odd" color="#3BCDBB">
                <EvenOrOdd number={2} />
            </Card>

            <Card title="#07 - Challenge Table Products" color="#B7B20A">
                <TableProducts />
            </Card>

            <Card title="#06 - Repeat" color="#461C5A">
                <ListStudents />
            </Card>

            <Card title="#05 - Family" color="#1C225A">
                <Family lastName="de Souza">
                    <FamilyMember firstName="Anderson" />
                    <FamilyMember firstName="Isabela Ribeiro" />
                    <FamilyMember firstName="Agatha Ferreira" />
                    <FamilyMember firstName="Olaff Ribeiro" />
                </Family>
            </Card>

            <Card title="#04 - Challenge Random" color="#FF5733">
                <Random min={1} max={10} />
            </Card>

            <Card title="#03 - Challenge Fragment" color="#6AB937">
                <Fragment />
            </Card>

            <Card title="#02 - Challenge Second Component" color="#9565A9">
                <Second
                    title="Second Component"
                    subtitle="Nice!!" />
            </Card>

            <Card title="#01 - Challenge First Component" color="#6583A9">
                <Fisrt></Fisrt>
            </Card>
        </div>
    </div>
);