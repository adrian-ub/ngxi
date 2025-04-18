import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoBoldIcon],svg[ph-spotify-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m66.59-84.36a12 12 0 0 1-16.24 4.93a106.7 106.7 0 0 0-100.7 0A11.8 11.8 0 0 1 72 134a12 12 0 0 1-5.66-22.58a130.61 130.61 0 0 1 123.3 0a12 12 0 0 1 4.95 16.22m-16 36a12 12 0 0 1-16.23 5a73 73 0 0 0-68.72 0a12 12 0 0 1-11.28-21.18a97 97 0 0 1 91.28 0a12 12 0 0 1 4.95 16.18"></svg:path>`,
})
export class PhSpotifyLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
