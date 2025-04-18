import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDragIndicatorFillIcon],svg[si-drag-indicator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class SiDragIndicatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
