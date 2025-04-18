import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonResetAltIcon],svg[carbon-reset-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 8H6.83l3.58-3.59L9 3L3 9l6 6l1.41-1.41L6.83 10H27v16H7v-7H5v7a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonResetAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
