import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public editableInput = false
  protected toDos:Array<string> = [
    'make a dinner',
    'drink water',
    'kill a rabbit',
    'study a little',
    'code for hours'
  ]
  public todoWhat:string = ''
  isBeingEdited:any = [];
  userInput = (e:any) => {
    this.todoWhat = e.target.value
  }
  onToDoSubmit = (event:any,viaWhat:string) => {
    if (this.todoWhat != '') {
      this.toDos.push(this.todoWhat)
      event.target.value = ''
      this.todoWhat = ''
    }
    console.log(this.isBeingEdited)
  }
  onToDoDelete = (event:any,i:number) => {
    this.toDos.splice(i,1)
    this.isBeingEdited[i] = false
    console.log(this.isBeingEdited)
  }
  onToDoEdit = (i:number) => {
    this.isBeingEdited[i] = !this.isBeingEdited[i]
    console.log(this.isBeingEdited)
  }
  doneEditingInput = (i:number) => {
    this.isBeingEdited[i] = false
  }
}
