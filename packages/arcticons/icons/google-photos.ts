import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGooglePhotosIcon],svg[arcticons-google-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 13.51A9.25 9.25 0 0 1 24 22.76V24h0H6.74a1.24 1.24 0 0 1-1.24-1.24v0a9.25 9.25 0 0 1 9.25-9.25m18.5 20.98A9.25 9.25 0 0 1 24 25.24V24h17.26a1.24 1.24 0 0 1 1.24 1.24h0a9.25 9.25 0 0 1-9.25 9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 33.25A9.25 9.25 0 0 1 22.75 24H24v17.25a1.24 1.24 0 0 1-1.25 1.25h0a9.25 9.25 0 0 1-9.25-9.25m21-18.5A9.25 9.25 0 0 1 25.25 24H24h0V6.74a1.24 1.24 0 0 1 1.25-1.24h0a9.25 9.25 0 0 1 9.25 9.25"></svg:path>`,
})
export class ArcticonsGooglePhotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
