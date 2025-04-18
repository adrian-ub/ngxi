import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivacyshadeIcon],svg[arcticons-privacyshade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M32.6 21.3c0 4.8-3.8 8.7-8.6 8.8c-4.8 0-8.7-3.8-8.8-8.6v-.2c0-4.8 3.8-8.7 8.6-8.8s8.7 3.8 8.8 8.6z"></svg:path><svg:path fill="none" d="M34.9 21.6c.7-6.1-5-11.1-11-11.1s-11.8 5-11 11.1c.7 6.2 6.8 15.1 11 15c4.2.1 10.3-8.8 11-15"></svg:path><svg:path fill="none" d="M31.3 30.5h6.2v6.9h-27v-6.9h5.9M35 20.6h2.5v6.9H33m-18.3 0h-4.2v-6.9h2.3m12.9-10h11.8v6.9h-3.1m-21.1 0h-2.8v-6.9H22"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsPrivacyshadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
