class DaysToCome {
  textGreeting: string;
  textDaysLeft: string;
  textDayLeft: string;
  textBirthDay: string;
  constructor({ textGreeting, textDaysLeft, textDayLeft, textBirthDay }: any) {
    this.textGreeting = textGreeting;
    this.textDaysLeft = textDaysLeft;
    this.textDayLeft = textDayLeft;
    this.textBirthDay = textBirthDay;
  }
  YearsOld(DOB: string) {
    const birthDay = parseInt(DOB.split('-')[2]);
    const birthMonth = parseInt(DOB.split('-')[1]);
    const birthYear = parseInt(DOB.split('-')[0]);
    let yearOld = [];
    if (
      new Date().getDate() >= birthDay ||
      new Date().getMonth() <= birthMonth
    ) {
      yearOld.push(
        new Date().getDate() < birthDay && new Date().getMonth() < birthMonth
          ? new Date().getFullYear() - birthYear - 1
          : new Date().getFullYear() - birthYear
      );
    }
    return yearOld;
  }

  DaysToBirthDay(DOB: string, DaysLeft: any, el: string, nameClass: string) {
    const birthDay = parseInt(DOB.split('-')[2]);
    const birthMonth = parseInt(DOB.split('-')[1]);
    const toDay = new Date().getDate();
    const toMonth = new Date().getMonth() + 1;

    const diffDays = Math.floor(
      (+new Date(birthMonth + '-' + birthDay) -
        +new Date(`'${toMonth}-${toDay}'`)) /
        86400000
    );
    const checkDayorDays = (dayOrDays: any) => {
      switch (dayOrDays) {
        case true:
          return `${diffDays} ${this.textDayLeft || ' '}`;
        case false:
          return `${diffDays} ${this.textDaysLeft || ' '}`;
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
        return ` ${el ? `<${el} class="greeting">` : ''} ${this.textGreeting ||
          ''} ${el ? `</${el}>}` : ''}`;
      default:
        if (diffDays <= parseInt(DaysLeft) && 0 <= diffDays) {
          return `${el ? `<${el} class="${nameClass}">` : ''} ${this
            .textBirthDay || ''} ${checkDayorDays(
            checkDaysLeft(diffDays) && diffDays <= 1
          )} ${el ? `</${el}>` : ''}`;
        }
    }
    return;
  }
}
//====DaysGone=====
class DaysGone {
  textDaysGone: any;
  textDayGone: any;
  textBirthDayGone: any;
  constructor({ textDaysGone, textDayGone, textBirthDayGone }: any) {
    this.textDaysGone = textDaysGone;
    this.textDayGone = textDayGone;
    this.textBirthDayGone = textBirthDayGone;
  }

  DaysGoneBirthDay(DOB: string, DayGone: any, el: string, nameClass: string) {
    const birthDay = parseInt(DOB.split('-')[2]);
    const birthMonth = parseInt(DOB.split('-')[1]);
    const toDay = new Date().getDate();
    const toMonth = new Date().getMonth() + 1;

    const diffDays = Math.floor(
      (+new Date(birthMonth + '-' + birthDay) -
        +new Date(`'${toMonth}-${toDay}'`)) /
        86400000
    );

    const goneDays = -diffDays;
    switch (goneDays) {
      case 1:
        return ` ${el ? `<${el} class="${nameClass}">` : ''}${this
          .textBirthDayGone || ''} ${goneDays} ${this.textDayGone || ' '} ${
          el ? `</${el}>` : ''
        }`;
      default:
        if (goneDays > 1 && goneDays <= parseInt(DayGone)) {
          return `${el ? `<${el} class="${nameClass}">` : ''} ${this
            .textBirthDayGone || ''} ${goneDays} ${this.textDaysGone || ' '} ${
            el ? `</${el}>` : ''
          }`;
        }
    }

    return;
  }
}

export { DaysToCome, DaysGone };
