import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuthenticatorAlt1Icon],svg[arcticons-authenticator-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 27.95l19.5-10.43L24 8.13L4.5 17.52z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.37 20.66L4.5 23.48L24 33.91l19.5-10.43l-5.87-2.82"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.37 26.62L4.5 29.44L24 39.87l19.5-10.43l-5.87-2.82"></svg:path>`,
})
export class ArcticonsAuthenticatorAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
