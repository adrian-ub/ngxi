import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoDuotoneIcon],svg[ph-spotify-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m31.07-46.26a8 8 0 0 1-10.81 3.33a42.79 42.79 0 0 0-40.52 0a8 8 0 0 1-7.48-14.14a59.33 59.33 0 0 1 55.48 0a8 8 0 0 1 3.33 10.81m32-56a8 8 0 0 1-10.83 3.29a110.62 110.62 0 0 0-104.46 0a8 8 0 0 1-7.54-14.12a126.67 126.67 0 0 1 119.54 0a8 8 0 0 1 3.28 10.85Zm-16 28a8 8 0 0 1-10.82 3.3a77.07 77.07 0 0 0-72.48 0a8 8 0 0 1-7.52-14.12a93 93 0 0 1 87.52 0a8 8 0 0 1 3.29 10.84Z"></svg:path></svg:g>`,
})
export class PhSpotifyLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
