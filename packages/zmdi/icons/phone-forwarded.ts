import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneForwardedIcon],svg[zmdi-phone-forwarded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 219v-64h-85V69h85V5l107 107zm43 96q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 432q-99 0-182.5-48.5t-132-132T0 69q0-8 6.5-14.5T21 48h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12"></svg:path>`,
})
export class ZmdiPhoneForwardedIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
