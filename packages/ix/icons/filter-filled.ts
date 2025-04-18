import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFilterFilledIcon],svg[ix-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333L234.232 320h.435v149.333h42.667V320l192-234.667z"></svg:path>`,
})
export class IxFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
