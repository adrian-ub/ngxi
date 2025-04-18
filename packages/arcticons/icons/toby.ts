import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTobyIcon],svg[arcticons-toby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 17.5a6 6 0 0 1 0-12h25a6 6 0 0 1 0 12zm18.5 19a6 6 0 0 1-12 0v-15h12z"></svg:path><svg:circle cx="36.5" cy="11.5" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.11 17.5c9.783 0 5.623-12.297 15.577-11.994"></svg:path>`,
})
export class ArcticonsTobyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
