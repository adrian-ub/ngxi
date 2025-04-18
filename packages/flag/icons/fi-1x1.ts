import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFi1x1Icon],svg[flag-fi-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#002f6c" d="M0 186.2h512v139.6H0z"></svg:path><svg:path fill="#002f6c" d="M123.2 0h139.6v512H123.1z"></svg:path>`,
})
export class FlagFi1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
