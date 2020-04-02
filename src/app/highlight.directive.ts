import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  

  constructor(private elem:ElementRef){}

  @HostListener("click") onClik(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClick(){
    this.textDeco("none")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }

}
