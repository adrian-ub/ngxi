import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSpinnerSolidIcon],svg[pixel-spinner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h1v2H7v1H5V7H4V5h1V4h2zm6-3h1v2h-1v1h-2V4h-1V2h1V1h2zM4 14H2v-1H1v-2h1v-1h2v1h1v2H4zm3 3h1v2H7v1H5v-1H4v-2h1v-1h2zm16-6v2h-1v1h-2v-1h-1v-2h1v-1h2v1zm-4 6h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm-6 3h1v2h-1v1h-2v-1h-1v-2h1v-1h2z"></svg:path>`,
})
export class PixelSpinnerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
