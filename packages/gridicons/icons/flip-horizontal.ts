import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsFlipHorizontalIcon],svg[gridicons-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-5h3v-2h-3V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5H1v2h3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6 6h12v5H6z"></svg:path>`,
})
export class GridiconsFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
