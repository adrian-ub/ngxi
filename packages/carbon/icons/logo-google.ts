import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoGoogleIcon],svg[carbon-logo-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18Z"></svg:path>`,
})
export class CarbonLogoGoogleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
