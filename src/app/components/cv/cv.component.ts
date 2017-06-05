import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

	experienceData = [{
    date:'',
    description: '',
    company: ''
  }];

  addExperience() {
    this.experienceData.push({
      date: '',
      description: '',
      company: ''
    })
  }

  educationData = [{
    date:'',
    description: '',
    school: ''
  }];

  addEducation() {
    this.educationData.push({
      date: '',
      description: '',
      school: ''
    })
  }

  languageData = [{
    language: '',
    level: ''
  }];

  languageLevels = ["modersmål", "flytande tal/skrift","goda tal/skrift","begränsad tal/skrift"];

  addLanguage() {
    this.languageData.push({
      language: '',
      level: ''
    })
  }

  computerData = [{
    system: '',
    level: ''
  }];

  computerLevels = ["Mycket goda kunskaper","god kunskap","begränsad kunskap"];

  addComputerSkills() {
    this.computerData.push({
      system: '',
      level: ''
    })
  }


  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
	}

	constructor () {
  }
  ngOnInit() {
  }

}
