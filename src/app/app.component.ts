import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected toDos:Array<string> = []
  onEnter = (event:any) => {
    this.toDos.push(event.target.value)
    event.target.value = ''
  }
  onToDoDelete = (event:any,i:number) => {
    this.toDos.splice(i,1)
  }
}
