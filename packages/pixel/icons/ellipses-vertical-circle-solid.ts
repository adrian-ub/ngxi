import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalCircleSolidIcon],svg[pixel-ellipses-vertical-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9zm1 9h1v-1h2v1h1v2h-1v1h-2v-1h-1zm1 8v-1h-1v-2h1v-1h2v1h1v2h-1v1zm2-14v1h1v2h-1v1h-2V8h-1V6h1V5z"></svg:path>`,
})
export class PixelEllipsesVerticalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
