import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextBoldBoldIcon],svg[solar-text-bold-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.609 1A3.61 3.61 0 0 0 4 4.609V19.94A3.06 3.06 0 0 0 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1zM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8z" clip-rule="evenodd"></svg:path>`,
})
export class SolarTextBoldBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
