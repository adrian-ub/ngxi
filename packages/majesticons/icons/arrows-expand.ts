import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandIcon],svg[majesticons-arrows-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 3a1 1 0 0 1 .707 1.707L7.414 6l2.293 2.293a1 1 0 0 1-1.414 1.414L6 7.414L4.707 8.707A1 1 0 0 1 3 8V4a1 1 0 0 1 1-1h4zm6.293 12.707a1 1 0 0 1 1.414-1.414L18 16.586l1.293-1.293A1 1 0 0 1 21 16v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-.707-1.707L16.586 18l-2.293-2.293zM8 21a1 1 0 0 0 .707-1.707L7.414 18l2.293-2.293a1 1 0 0 0-1.414-1.414L6 16.586l-1.293-1.293A1 1 0 0 0 3 16v4a1 1 0 0 0 1 1h4zm6.293-12.707a1 1 0 0 0 1.414 1.414L18 7.414l1.293 1.293A1 1 0 0 0 21 8V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.707 1.707L16.586 6l-2.293 2.293z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
