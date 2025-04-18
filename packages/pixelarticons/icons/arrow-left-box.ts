import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowLeftBoxIcon],svg[pixelarticons-arrow-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v18H3V3zM5 19h14V5H5zm12-8v2h-6v2H9v-2H7v-2h2V9h2v2zm-4-2h-2V7h2zm0 8v-2h-2v2z"></svg:path>`,
})
export class PixelarticonsArrowLeftBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
