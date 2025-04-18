import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFilterIcon],svg[ix-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333L234.232 320h.435v149.333h42.667V320l192-234.667zm214.448 192h-2.636L132.575 128h246.722z"></svg:path>`,
})
export class IxFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
