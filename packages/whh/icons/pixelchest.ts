import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelchestIcon],svg[whh-pixelchest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 832V448H768v384H192V448H64v384H0V192h64v192h832V192h64v640zM512 448v128h-64V448h-64v192h192V448zM832 64h64v128h-64zM704 192h64v128H192V192h64V64H128V0h704v64H704zm-640 0V64h64v128zm832 704H768v-64h128zm-704 0H64v-64h128z"></svg:path>`,
})
export class WhhPixelchestIcon {
  readonly viewBox = input("0 0 960 896")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
