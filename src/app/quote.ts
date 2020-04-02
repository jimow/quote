export class Quote {
     showAuthor: boolean;
     constructor(public quote: string,public author: string,public submitted_by: string,
        public upvote: number, public downvote: number){
        this.showAuthor=false;
      }
}

