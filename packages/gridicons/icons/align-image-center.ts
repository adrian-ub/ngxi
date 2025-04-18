import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAlignImageCenterIcon],svg[gridicons-align-image-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v2H3zm0 14h18v-2H3zm5-4h8V9H8z"></svg:path>`,
})
export class GridiconsAlignImageCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
