import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWakingUpIcon],svg[arcticons-waking-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.028 12.847l-.005.003a12.587 12.587 0 1 0-21.726 12.041l-.004.002l.026.027a25 25 0 0 0 1.609 1.805C18.032 30.983 30.242 43.5 30.242 43.5V30.463h5.303V23h2.873Z"></svg:path>`,
})
export class ArcticonsWakingUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
