import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuthenticateIcon],svg[arcticons-authenticate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.17 3.42L15.49 18.83a4.3 4.3 0 0 0-1.58 5.87h0a4.3 4.3 0 0 0 5.88 1.58l7.9-4.56a4.29 4.29 0 0 1 5.87 1.58h0A4.29 4.29 0 0 1 32 29.17L5.31 44.58"></svg:path>`,
})
export class ArcticonsAuthenticateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
