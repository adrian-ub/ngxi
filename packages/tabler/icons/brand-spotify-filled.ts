import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSpotifyFilledIcon],svg[tabler-brand-spotify-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-2.168 11.605c-1.285-1.927-4.354-2.132-6.387-.777a1 1 0 0 0 1.11 1.664c1.195-.797 3.014-.675 3.613.223a1 1 0 1 0 1.664-1.11M16.1 11.7c-2.469-1.852-5.895-2.187-8.608-.589a1 1 0 0 0 1.016 1.724c1.986-1.171 4.544-.92 6.392.465a1 1 0 0 0 1.2-1.6m1.43-3.048C13.853 6.354 9.764 6.5 6.553 8.106a1 1 0 0 0 .894 1.788c2.635-1.317 5.997-1.437 9.023.454a1 1 0 1 0 1.06-1.696"></svg:path>`,
})
export class TablerBrandSpotifyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
