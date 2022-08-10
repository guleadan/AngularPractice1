import { Component, OnInit } from '@angular/core';
import { Todo} from "../../todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  alpha: Todo[];
  constructor() { 
    this.alpha=  [ 
      {
        sno:3,
        title:"Hello",
        desc: "This is description"
        
    },
    {
      sno:2,
      title:"Hello2",
      desc: "This is description2"
      
  },
  {
    sno:4,
    title:"Hello4",
    desc: "This is description4"
    
}

    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index= this.alpha.indexOf(todo);
    this.alpha.splice(index,1);
  }

}
