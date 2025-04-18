import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorLineIcon],svg[si-drag-indicator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-12a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path>`,
})
export class SiDragIndicatorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
