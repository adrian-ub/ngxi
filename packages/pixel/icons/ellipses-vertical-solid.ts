import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalSolidIcon],svg[pixel-ellipses-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-1v1h-1v1h-2V6h-1V5H9V3h1V2h1V1h2v1h1v1zm-1 8h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1V9h2v1h1zm0 8h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1v-1h2v1h1z"></svg:path>`,
})
export class PixelEllipsesVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
