import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExclamationTriangleSolidIcon],svg[pixel-exclamation-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1V8h-1V6h-1V4h-1V2h-1V1h-2v1h-1v2H9v2H8v2H7v2H6v2H5v2H4v2H3v2H2v2H1v2h1v1h20v-1h1v-2zm-12-9h4v3h-1v3h-2v-3h-1zm1 7h2v2h-2z"></svg:path>`,
})
export class PixelExclamationTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
