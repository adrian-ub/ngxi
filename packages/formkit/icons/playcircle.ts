import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitPlaycircleIcon],svg[formkit-playcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.89 7.79l-3-2A.25.25 0 0 0 6.5 6v4c0 .2.22.32.39.21l3-2c.15-.1.15-.31 0-.41Z"></svg:path><svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path>`,
})
export class FormkitPlaycircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
