import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRadioButtonFillIcon],svg[ri-radio-button-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiRadioButtonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
