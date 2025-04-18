import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixellanceIcon],svg[whh-pixellance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128V64h-64V0h128v128zm0 64h-64v-64h64zm-128-64V64h64v64zm-128 0h128v64H704zm0 128h64v64h64v64H704v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64V192h64zM128 896H64v64h64zm768-704v128h-64V192z"></svg:path>`,
})
export class WhhPixellanceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
