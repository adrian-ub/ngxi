import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalIcon],svg[pixel-ellipses-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10H5V9H3v1H2v1H1v2h1v1h1v1h2v-1h1v-1h1v-2H6zm-1 3H3v-2h2zm9-3h-1V9h-2v1h-1v1H9v2h1v1h1v1h2v-1h1v-1h1v-2h-1zm-1 3h-2v-2h2zm9-2v-1h-1V9h-2v1h-1v1h-1v2h1v1h1v1h2v-1h1v-1h1v-2zm-3 2v-2h2v2z"></svg:path>`,
})
export class PixelEllipsesHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
