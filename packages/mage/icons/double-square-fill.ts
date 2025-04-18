import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleSquareFillIcon],svg[mage-double-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.54 11.37a3.42 3.42 0 0 1-3.42 3.42h-2.74a3.42 3.42 0 0 1-3.42-3.42v-2.74a3.42 3.42 0 0 1 3.42-3.42h2.74a3.42 3.42 0 0 1 3.42 3.42z"></svg:path>`,
})
export class MageDoubleSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
