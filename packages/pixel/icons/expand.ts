import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExpandIcon],svg[pixel-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2H3v6H1V2h1V1zm0 20v2H2v-1H1v-7h2v6zm14-6v7h-1v1h-7v-2h6v-6zm0-13v7h-2V3h-6V1h7v1z"></svg:path>`,
})
export class PixelExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
