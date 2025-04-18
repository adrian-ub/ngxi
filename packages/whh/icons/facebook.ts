import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFacebookIcon],svg[whh-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 448q26 0 45 18.5t19 45.5v64q0 27-19 45.5T512 640H320v320q0 26-19 45t-45 19h-64q-27 0-45.5-19T128 960V640H64q-27 0-45.5-18.5T0 576v-64q0-27 18.5-45.5T64 448h64V256q0-106 75-181T384 0h128q27 0 45.5 18.5T576 64v64q0 27-18.5 45.5T512 192H384q-27 0-45.5 18.5T320 256v192z"></svg:path>`,
})
export class WhhFacebookIcon {
  readonly viewBox = input("0 0 576 1024")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
