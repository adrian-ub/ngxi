import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowUpBoxIcon],svg[pixelarticons-arrow-up-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18V3H3zM19 5v14H5V5zm-8 12h2v-6h2V9h-2V7h-2v2H9v2h2zm-2-4v-2H7v2zm8 0h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsArrowUpBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
