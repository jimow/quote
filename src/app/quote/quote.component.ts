import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote('Happy people plan actions they dont plan results' ,'Dennis Waitley','Jamal', 0, 0,),
    new Quote('Love is that condition in which the happiness of another person is essential to your own.', 'Robert A. Heinlein'
    ,'Jamal', 0, 0,),
    new Quote('Happiness is when what you think, what you say, and what you do are in harmony.',' Mahatma Gandhi'
    ,'Jamal', 0, 0,),
    new Quote('The only joy in the world is to begin.', 'Cesare Pavese','Jamal', 0, 0,),
    new Quote('Some cause happiness wherever they go; others whenever they go.', 'Oscar Wilde'
    ,'Jamal', 0, 0,),
    new Quote('Time you enjoy wasting is not wasted time.', 'Marthe Troly-Curtin','Jamal', 0, 0,),
    new Quote('Nobody can be uncheered with a balloon.', 'Winnie the Pooh','Jamal', 0, 0,),

  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
  
    this.quotes.push(quote)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}


