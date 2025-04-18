import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaArrowLeftOutlineIcon],svg[cuida-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 12.214a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2H6.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.214a1 1 0 0 1 .293-.707l4.5-4.5a1 1 0 1 1 1.414 1.414l-3.793 3.793l3.793 3.793a1 1 0 0 1-1.414 1.414l-4.5-4.5A1 1 0 0 1 4 12.214" clip-rule="evenodd"></svg:path>`,
})
export class CuidaArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
