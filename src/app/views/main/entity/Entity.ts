import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'entity',
  templateUrl: './Entity.html'
})

export class EntityComponent {

  @Input('entity') entity: any;
  @Output('selectEntity') selectEntity: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {

  }

}
