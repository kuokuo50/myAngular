import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatStepperIntl, ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as moment from 'moment';

export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

// 調整時機為invalid + dirty即顯示錯誤訊息
export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }, { provide: ErrorStateMatcher, useClass: EarlyErrorStateMatcher }]
})
export class SurveyComponent implements OnInit {
  isLinear: boolean;
  surveyForm: FormGroup;
  earlyErrorStateMacher = new EarlyErrorStateMatcher();
  countries$: Observable<any[]>;
  majorTechList: any[];

  startDate = moment('1999-1-10');
  minDate = moment('1999-1-5');
  maxDate = moment('1999-1-15');

  constructor(private httpClient: HttpClient) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required),
        nickname: new FormControl('', Validators.required),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl('')
      })
    });
  }

  ngOnInit() {
    this.isLinear = true;
    this.surveyForm
      .get('basicQuestions')
      .get('country')
      .valueChanges
      .subscribe(inputCountry => {
        this.countries$ = this.httpClient.get<any[]>('assets/countries.json').pipe(map(countries => {

           return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
        }));
        console.log(this.countries$);
      });
    this.majorTechList = [
        {
          name: '前端',
          items: ['HTML', 'CSS', 'JavaScript']
        },
        {
          name: '後端',
          items: ['C#', 'NodeJs', 'Go']
        }
      ];
  }

  highlightFiltered(countryName: string) {
    const inputCountry = this.surveyForm.get('basicQuestions').get('country').value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }

}
