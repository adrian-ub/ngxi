import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowRightBoxIcon],svg[pixelarticons-arrow-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM19 5H5v14h14zM7 13v-2h6V9h2v2h2v2h-2v2h-2v-2zm4 2h2v2h-2zm0-8v2h2V7z"></svg:path>`,
})
export class PixelarticonsArrowRightBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
