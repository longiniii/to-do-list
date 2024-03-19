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
  isBeingEdited:any = [];
  onToDoSubmit = (input:HTMLInputElement) => {
    if (input.value != '') {
      this.toDos.push(input.value)
      input.value = ''
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
