import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImageFlipHorizontalIcon],svg[dashicons-image-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3v14h-8v3H9v-3H1V3h8V0h2v3zm-8.5 14V3h-1v14zM7 6.5L3 10l4 3.5zM17 10l-4-3.5v7z"></svg:path>`,
})
export class DashiconsImageFlipHorizontalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
