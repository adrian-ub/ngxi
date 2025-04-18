import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoneIcon],svg[mdi-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-.77.29-1.47.76-2c-.47-.53-.76-1.23-.76-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3c1.33.08 2.67.17 4 .17s2.67-.09 4-.17a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .77-.29 1.47-.76 2c.47.53.76 1.23.76 2a3 3 0 0 1-3 3a3 3 0 0 1-3-3c-1.33-.08-2.67-.17-4-.17s-2.67.09-4 .17"></svg:path>`,
})
export class MdiBoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
