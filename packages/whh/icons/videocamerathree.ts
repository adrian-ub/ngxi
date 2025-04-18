import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVideocamerathreeIcon],svg[whh-videocamerathree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 571L768 386v126q0 53-37.5 90.5T640 640H128q-53 0-90.5-37.5T0 512V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v126L985 69q16-13 39 7v488q-23 20-39 7M576.5 128q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhVideocamerathreeIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
