import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '920915',
  'gender' : '남자',
  'job' : '백수'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김똥개',
  'birthday' : '920102',
  'gender' : '남자',
  'job' : '백수'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김철수',
  'birthday' : '920318',
  'gender' : '남자',
  'job' : '백수'
}
]

class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(d =>{
            return (
              <Customer
                id={d.id}
                image={d.image}
                name={d.name}
                birthday={d.birthday}
                gender={d.gender}
                job={d.job}
              />      
            );
          })
        }
      </div>
    );
  }
}

export default App;
