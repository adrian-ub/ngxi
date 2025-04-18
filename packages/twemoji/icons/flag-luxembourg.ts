import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagLuxembourgIcon],svg[twemoji-flag-luxembourg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 14h36v8H0z"></svg:path><svg:path fill="#ED2939" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#00A1DE" d="M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4"></svg:path>`,
})
export class TwemojiFlagLuxembourgIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
