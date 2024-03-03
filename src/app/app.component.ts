import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public editableInput = false
  protected toDos:Array<string> = []
  public todoWhat:string = ''
  userInput = (e:any) => {
    this.todoWhat = e.target.value
  }
  onToDoSubmit = (event:any,viaWhat:string) => {
    if (this.todoWhat != '') {
      this.toDos.push(this.todoWhat)
      event.target.value = ''
      this.todoWhat = ''
    }
  }
  onToDoDelete = (event:any,i:number) => {
    this.toDos.splice(i,1)
  }
  onToDoEdit = (event:any,i:number) => {
    this.editableInput = true
  }
  doneEditingInput = () => {
    this.editableInput = false
  }
}
