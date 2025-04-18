import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitHappyIcon],svg[formkit-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path><svg:path fill="currentColor" d="M8 11.5c-1.48 0-2.81-.94-3.3-2.33a.501.501 0 0 1 .94-.34a2.502 2.502 0 0 0 4.72 0c.09-.26.38-.4.64-.3c.26.09.4.38.3.64A3.49 3.49 0 0 1 8 11.5"></svg:path>`,
})
export class FormkitHappyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
