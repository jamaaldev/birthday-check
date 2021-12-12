# birthday-check
made by :somalia: 
![](https://github.com/jamaaldev/DesktopFiles/blob/1e9d00e9bb9536a9903ced9d263ab46aa2c4e199/HD%20Banner%20(2).jpeg?raw=true?raw=trues=400)

Feature:DaysToCome :white_check_mark:<br>
* YearsOld Function Return How old The Person is in a Number:
`
birthDay.YearsOld(user.DOB)
`
* DaysToBirthDay Function Return How Many Days Left to BirthDay Date in it's String:
  `
  birthDay.DaysToBirthDay(user.DOB,'15')
  `<br>

Feature:DaysGone :white_check_mark:
* DaysGoneBirthDay Function Return How Many Days Gone By From BirthDay Date in it's String:<br>
  `
  birthGone.DaysGoneBirthDay(user.DOB,'15')
  `<br>

Feature:JointDate :white_check_mark:
* YearJoint Function Return When The user Joint:<br>
* 
  `
  JointYears.YearJoint('user.joint','options')
  `

## Notes: `This is Beta Release`:mega:

 ## Use:<br> 
This module package is For FrontEnd and BackEnd You can Use Import To Work With it, You Can use Require asWell:  Caution it Will Break your Code if You use both import and Require at the same Project,  This information is Those newbie Developers. 

## Install the Package by::blossom:
```
npm i birthday-check 
```
### Note :ear: Don't Forget To add Your HTML File Like this Example:<br>
```   
<script type="module" src="script.js"></script>
```

```
type="module"
```
### How To import in to your project FrontEnd Javascript Vanilla: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/><br>

```
import {DaysGone,DaysToCome,JointDate} from './node_modules/birthday-check/dist/birthday-check.esm.js'
```

### How To import in to your project ReactJs:<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>: and NodeJs: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/><br>

please make sure if you use import in ReactJS or NodeJS  you need to add in your package.json:<br> `"type": "module"`
```
import {DaysGone,DaysToCome,JointDate} from 'birthday-check'
```
if you use require in NodeJs This is only for NodeJs you don't need to add in your package.json: `"type": "module"`<br>

```
const {DaysGone,DaysToCome,JointDate} = require('birthday-check')
```

#### CustomText if you need Different text you can add like this Example or leave Empty String Except textGreeting if you want to show Today is your BirthDay or make it Empty as you Wish ,

### Initialization the class In the following Example the constructor customTexts.

```
const customTextDaysToCome ={
  textGreeting:'Today is Your BirthDay',
  textDaysLeft:'Days Left',
  textDayLeft:'Day Left',
  textBirthDay:'BirthDay:'
}
```
```
const customTextDaysGone ={
  textDaysGone:'Days Ago',
  textDayGone:'Day Ago',
  textBirthDayGone:'BirthDayGone:'
}
```
### instance class 
```
const birthDay = new DaysToCome(customTextDaysToCome)
```
```
const birthGone = new DaysGone(customTextDaysGone)
```
#if you dont want customText and you happy the default Empty put string Importand Example:<br>

```
  const birthDay = new DaysToCome('')
```
```
  const birthGone = new DaysGone('')
```
This feature you dont need customText
```
const jointYears = new JointDate()
```
<br>

### What is For This Package Do For You At The Moment:<br>
 you need to calculate the user's date of birth from today. It will return how many days left from now on or 1 day left or today is your birthday, you can also get when the user joint day, month, year, or only month and year, you have option to choose, also How old the user is, and how many Days Gone from birthday, you can customize the Text as I already mentioned it above.<br>


### Example The user joint a day on that month and that year
```
jointYears.YearJoint('user.joint','options'))

jointYears.YearJoint('2021-11-05','dayNumber')) //return =>  5 November 2021
jointYears.YearJoint('2021-11-05','dayName')) //return =>  Friday November 2021

jointYears.YearJoint('2021-11-05','') // return =>  November 2021
jointYears.YearJoint('2021-11-05','any string you put') // return =>  November 2021
jointYears.YearJoint('2021-11-05') // return => November 2021

```
#### Note: This is For Browser Javascript Vanilla Tag Element and ClassName,

```
 birthDay.DaysToBirthDay(user.DOB,'15','h1','customClass')
```
```
 birthGone.DaysGoneBirthDay(user.DOB,'45','h1','customClass')
```
## For Reactjs <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> Choose your Tag Element 🎉:<br> 

```
  <h1>
    {birthDay.DaysToBirthDay(user.DOB,'15')}
  </h1>

```
```
  <h1>
    {birthGone.DaysGoneBirthDay(user.DOB,'15')}
  </h1>

```
#### This is how you can use in Reactjs to Refresh The Birthday

```
  const [birth,setBirth] = useState('')
  const [CurrentDate, setCurrentDate] = useState(new Date())
  
  useEffect(() => {
    const birthDay = new DaysToCome('')
    setTimeout(() => setCurrentDate(new Date()), new Date().getDate());
    setBirth(birthDay.DaysToBirthDay('2000-12-4','15'))
  }, [CurrentDate]);


```

### user.DOB: string (2000-10-05)<br>

### '15' string or number:<br>
you can change different number this will help you to show how many days you want to remind the user it will calculate from now date to his/her days to come to their birthday date #Note: if empty or 0 only show today is your birthday, if there is a any user birthday is today.<br>

### This is for JS Vanilla Browser to use
#### 'h1' <br>
you can use any Tag element Note :ear: This is good when you use for loop in javascript vanilla if you wrap your own tag you may see an empty background if there is no data so it is better to use my solution only in javascript vanilla. This solution you don't need in ReactJs 
### This is for JS Vanilla Browser to use
### 'customClass': <br>
you can add a custom class with h1 or any Tag you choose.<br>

# birthday-check:<br>
Feature:DaysToCome :white_check_mark:<br>
* YearsOld Function Return How old The Person:
`
birthDay.YearsOld(user.DOB)
`
* DaysToBirthDay Function Return How Many Days Left to BirthDay Date:<br>
  `
  birthDay.DaysToBirthDay(user.DOB,'15')
  `<br>
  
Feature:DaysGone :white_check_mark:
* DaysGoneBirthDay Function Return How Many Days Gone By From BirthDay Date:<br>
  `
  birthGone.DaysGoneBirthDay(user.DOB,'15')
  ` <br>

  Feature:JointDate :white_check_mark:
* YearJoint Function Return When The user Joint:<br>
  
  `
  JointYears.YearJoint('user.joint','options')
  `

You can Use With Browser <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> and ReactJs<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>; and NodeJs: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/><br>

