import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      components works!!!! {{ name }}
    </p>
  `,
  styles: []
})
export class ComponentsComponent implements OnInit {
  @Input() name = 'Test';

  constructor() { }

  ngOnInit() {
  }

}
