import { Component } from '@angular/core';
import { Question } from '../question';
import { NgIf , NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions: Question[] = [
    {
      question: 'What is a currency\'s purpose?',
      answer: 'All of the above',
      options: ['A medium of exchange', 'A store of value', 'A unit of account', 'All of the above']
    },
    {
      question: 'What drives the price of a currency or item?',
      answer: 'Supply and demand',
      options: ['Interest rates', 'Supply and demand', 'Inflation', 'GDP']
    },
    {
      question: 'What branch of government is the Federal Reserve a part of?',
      answer: 'Independent',
      options: ['Executive', 'Legislative', 'Independent', 'Judicial']
    },
    {
      question: 'What commodity used to back the US dollar?',
      answer: 'Gold',
      options: ['Gold', 'Silver', 'Oil', 'Pork bellies']
    },
    {
      question: 'What commodity currently backs the US dollar?',
      answer: 'Nothing',
      options: ['Gold', 'Silver', 'Oil', 'Nothing']
    },
    {
      question: 'What is inflation?',
      answer: 'A rise in prices',
      options: ['A fall in prices', 'A rise in prices', 'A rise in wages', 'A fall in wages']
    }
    
  ]
  currentQuestion = 0;
  selectedAnswer: String | null = null;
  answer: String | null = null;
  score = 0;
  nextClicked: boolean = false;



  selectAnswer(option: String) {
    this.selectedAnswer = option;
  }

  checkAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestion].answer) {
      this.score++;
    }

    this.answer = this.questions[this.currentQuestion].answer;
  }

  nextQuestion() {
    this.nextClicked = true;
    this.checkAnswer();
    

    setTimeout(() => {
      this.selectedAnswer = null; 
      this.answer = null; 
      this.nextClicked = false;
      this.currentQuestion++;
    }, 2000); 
  }

}
