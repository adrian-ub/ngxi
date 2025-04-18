import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDiscourseIcon],svg[pixel-discourse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v14h14v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-5-1v1h1v6h-1v1h-1v1h-1v1h-5v-1H9v1H7v1H5v-1h1v-2h1v-1H6V9h1V8h1V7h1V6h6v1h1v1z"></svg:path>`,
})
export class PixelDiscourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
