import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected toDos:Array<string> = []
  onToDoSubmit = (event:any,viaWhat:string) => {
    if (viaWhat == 'enterKey') {
      this.toDos.push(event.target.value)
    }
    // will be added soon
    // else if (viaWhat == "button") {
    //   console.log(event.target.elementParen,@viewChild('toDoInput'))
    //   this.toDos.push(event.target.elementParent@viewChild('toDoInput'))
    // }
    event.target.value = ''
  }
  onToDoDelete = (event:any,i:number) => {
    this.toDos.splice(i,1)
  }
}
