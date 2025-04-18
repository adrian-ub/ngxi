import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleAccessibilityScannerIcon],svg[arcticons-google-accessibility-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.933 6.905L6.95 17.791a3.52 3.52 0 0 0-1.278 3.932l5.723 17.613a3.52 3.52 0 0 0 3.345 2.43h18.52a3.52 3.52 0 0 0 3.345-2.43l5.723-17.613a3.52 3.52 0 0 0-1.278-3.932L26.068 6.905a3.52 3.52 0 0 0-4.135 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.775 25.442l6.053 5.97L32.63 19.669"></svg:path>`,
})
export class ArcticonsGoogleAccessibilityScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
