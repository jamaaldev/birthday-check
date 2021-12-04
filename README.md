# birthday-check
made by :somalia: 

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
  `

## Notes: `This is Beta Release`:mega:

 ## Use:<br> 
This module package is For FrontEnd and BackEnd You Must Use Import To Work With it, You Can't use Require With import  Caution it Will Break your Code,  This information is Those newbie Developers. 

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
import {DaysToCome} from './node_modules/birthday-check/dist/birthday-check.esm.js'
```

### How To import in to your project ReactJs:<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>: and NodeJs: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/><br>

```
import {DaysToCome} from 'birthday-check'
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
<br>

### What is For This Package Do For You At The Moment:<br>
 you need to calculate the user's date of birth from today. It will return how many days left from now on or 1 day left or today is your birthday also Age, and how many Days Gone from birthday you can customize the Text as I already mentioned it above.<br>


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
  ` 

You can Use With Browser <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> and ReactJs<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>; and NodeJs: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/><br>
I am working on Another Feature: JointDay

