import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiYourSpotifyIcon],svg[cbi-your-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.403 12A4.403 4.403 0 0 1 12 16.403A4.403 4.403 0 0 1 7.597 12A4.403 4.403 0 0 1 12 7.597A4.403 4.403 0 0 1 16.403 12m3.447 6.2A10 10 0 0 0 4.929 4.929a10 10 0 0 0 13.525 14.709l-2.7-2.7a6.2 6.2 0 1 1 1.381-1.457z"></svg:path>`,
})
export class CbiYourSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
