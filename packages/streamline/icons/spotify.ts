import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpotifyIcon],svg[streamline-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 7a6 6 0 1 0 12 0A6 6 0 1 0 1 7"></svg:path><svg:path d="M4.055 4.837c2.382-.455 4.248-.202 6.51 1.002M4.98 8.875c1.152-.142 1.935.012 3.005.5M4.54 6.8c1.784-.355 3.031 0 4.914.909"></svg:path></svg:g>`,
})
export class StreamlineSpotifyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
