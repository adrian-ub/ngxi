import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEllipsesHorizontalSolidIcon],svg[pixel-ellipses-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h1v2h-1v1h-1v1h-2v-1h-1v-1H9v-2h1v-1h1V9h2v1h1zm-8 0h1v2H6v1H5v1H3v-1H2v-1H1v-2h1v-1h1V9h2v1h1zm17 0v2h-1v1h-1v1h-2v-1h-1v-1h-1v-2h1v-1h1V9h2v1h1v1z"></svg:path>`,
})
export class PixelEllipsesHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
