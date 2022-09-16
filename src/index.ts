// 
class DaysToCome {
  textGreeting?: string |undefined;
  textDaysLeft?: string |undefined;
  textDayLeft?: string |undefined;
  textBirthDay?: string |undefined;



constructor(customTextDaysToCome:any) {
  this.textGreeting = customTextDaysToCome?.textGreeting ;
  this.textDaysLeft = customTextDaysToCome?.textDaysLeft  ;
  this.textDayLeft = customTextDaysToCome?.textDayLeft ;
  this.textBirthDay = customTextDaysToCome?.textBirthDay ;

}
YearsOld(DOB: string) {
  const birthDay = parseInt(DOB.split("-")[2]);
  const birthMonth = parseInt(DOB.split("-")[1]);
  const birthYear = parseInt(DOB.split("-")[0]);
  let yearOld:number[] = [];
  if (birthDay || birthMonth || birthYear) {
    yearOld.push(new Date().getDate() < birthDay && new Date().getMonth() + 1 < birthMonth ? new Date().getFullYear() - birthYear - 1 : new Date().getFullYear() - birthYear);
  }
  if (yearOld.length) {
    return yearOld;
  }
  return;
}
DaysToBirthDay(DOB: string, DaysLeft: string, el?: string, nameClass?: string) {
  const birthDay = parseInt(DOB.split("-")[2]);
  const birthMonth = parseInt(DOB.split("-")[1]);
  const toDay = new Date().getDate();
  const toMonth = new Date().getMonth() + 1;
  
  const diffDays = Math.floor((+new Date(birthMonth + "-" + birthDay) - +new Date(`'${toMonth}-${toDay}'`)) / 86400000);
  const checkDayorDays = (dayOrDays: any) => {
    switch (dayOrDays) {
      case true:
        return `${diffDays} ${this.textDayLeft || " "}`;
      case false:
        return `${diffDays} ${this.textDaysLeft || " "}`;
    }
    return;
  };
  const checkDaysLeft = (checkDays: number) => {
    switch (new Date().getDate() >= checkDays) {
      case true:
        return `${checkDays}`;
      case false:
        return `${checkDays}`;
    }
  };
  switch (diffDays) {
    case 0:
      return ` ${el ? `<${el} class="greeting">` : ""} ${this.textGreeting || ""} ${el ? `</${el}>}` : ""}`;
    default:
      if (diffDays <= parseInt(DaysLeft) && 0 <= diffDays) {
        return `${el ? `<${el} class="${nameClass}">` : ""} ${this.textBirthDay || ""} ${checkDayorDays(checkDaysLeft(diffDays) && diffDays <= 1)} ${el ? `</${el}>` : ""}`;
      }
  }
  return;
}
}
//====DaysGone=====
class DaysGone {
textDaysGone?: string;
textDayGone?: string;
textBirthDayGone?: string;
constructor(customTextDaysGone:any) {
  this.textDaysGone = customTextDaysGone?.textDaysGone;
  this.textDayGone = customTextDaysGone?.textDayGone;
  this.textBirthDayGone = customTextDaysGone?.textBirthDayGone;
}

DaysGoneBirthDay(DOB: string, DayGone: any, el?: string, nameClass?: string) {
  const birthDay = parseInt(DOB.split("-")[2]);
  const birthMonth = parseInt(DOB.split("-")[1]);
  const toDay = new Date().getDate();
  const toMonth = new Date().getMonth() + 1;

  const diffDays = Math.floor((+new Date(birthMonth + "-" + birthDay) - +new Date(`'${toMonth}-${toDay}'`)) / 86400000);

  const goneDays = -diffDays;
  switch (goneDays) {
    case 1:
      return ` ${el ? `<${el} class="${nameClass}">` : ""}${this.textBirthDayGone || ""} ${goneDays} ${this.textDayGone || " "} ${el ? `</${el}>` : ""}`;
    default:
      if (goneDays > 1 && goneDays <= parseInt(DayGone)) {
        return `${el ? `<${el} class="${nameClass}">` : ""} ${this.textBirthDayGone || ""} ${goneDays} ${this.textDaysGone || " "} ${el ? `</${el}>` : ""}`;
      }
  }

  return;
}
}
//######
class JointDate {
YearJoint = (jointed: any, dayFormat: any) => {
  const jointYear = new Date(jointed).getFullYear();
  const jointMonth = new Date(jointed).getMonth();
  const jointDayNumber = new Date(jointed).getDate();
  const jointDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(jointed).getDay()];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const jointMonthName = months[jointMonth];

  if (dayFormat === "dayName") {
    return `${jointDayName} ${jointMonthName} ${jointYear}`;
  }
  if (dayFormat === "dayNumber") {
    return `${jointDayNumber} ${jointMonthName} ${jointYear}`;
  }
  if (dayFormat === "") {
    return `${jointMonthName} ${jointYear}`;
  }
  if (dayFormat === "undefined") {
    return `${jointMonthName} ${jointYear}`;
  }
  if (dayFormat === undefined) {
    return `${jointMonthName} ${jointYear}`;
  }
  if (dayFormat.length) {
    return `${jointMonthName} ${jointYear}`;
  }
  if (dayFormat === null) {
    return `${jointMonthName} ${jointYear}`;
  }
  return;
};
}

export { DaysToCome, DaysGone, JointDate };
