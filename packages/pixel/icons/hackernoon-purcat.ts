import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHackernoonPurcatIcon],svg[pixel-hackernoon-purcat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 6.501h-2v3h2zm-2 3.001h-2v6.001h2zm2 6.001h-2v3h2zm12.004 3.001v5.001H5.5v-5.001h3v2h6.002v-2zm2-3.001h-2v3h2zm4.001-4.001v2h-2v2.001h-2V9.502h2v2zm-4.001-5.001h-2v3h2zm-2-5.001v5.001h-3.001v-2h-2v9.002h-2.001V4.5h-2v2H5.5v-5z"></svg:path>`,
})
export class PixelHackernoonPurcatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
