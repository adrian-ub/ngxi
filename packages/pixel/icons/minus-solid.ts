import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMinusSolidIcon],svg[pixel-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1H2v-1H1v-2h1v-1h20v1z"></svg:path>`,
})
export class PixelMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
