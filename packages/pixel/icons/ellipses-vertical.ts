import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesVerticalIcon],svg[pixel-ellipses-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18h-1v-1h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm1-11h-1V9h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm1-10V2h-1V1h-2v1h-1v1H9v2h1v1h1v1h2V6h1V5h1V3zm-3 2V3h2v2z"></svg:path>`,
})
export class PixelEllipsesVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
