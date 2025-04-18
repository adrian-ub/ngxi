import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAsteriskIcon],svg[ri-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v7.267l6.294-3.633l1 1.732l-6.293 3.633l6.293 3.635l-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634l-1-1.732L9.999 12L3.706 8.366l1-1.732L11 10.267V3z"></svg:path>`,
})
export class RiAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
