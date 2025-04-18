import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneIcon],svg[zmdi-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M77 166q47 93 141 141l47-47q9-10 22-5q36 12 76 12q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22z"></svg:path>`,
})
export class ZmdiPhoneIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
