import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRadioButtonCheckedIcon],svg[carbon-radio-button-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonRadioButtonCheckedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
