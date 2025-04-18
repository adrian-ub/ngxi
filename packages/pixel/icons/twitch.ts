import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTwitchIcon],svg[pixel-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1H5v1H4v1H3v1H2v14h5v4h1v-1h1v-1h1v-1h1v-1h4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V1Zm14 11h-1v1h-1v1h-5v1h-1v1h-1v1h-1v-3H7V3h13Z"></svg:path><svg:path fill="currentColor" d="M16 5h2v5h-2zm-5 0h2v5h-2z"></svg:path>`,
})
export class PixelTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
