import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUserSolidIcon],svg[pixel-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9H6V5h1V3h1V2h2V1h4v1h2v1h1v2h1v4h-1v2h-1v1h-2v1h-4v-1H8v-1H7zm15 10v3h-1v1H3v-1H2v-3h1v-1h1v-1h1v-1h2v-1h10v1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
