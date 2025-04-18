import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAccessibilityIcon],svg[tdesign-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 2M8.75 3.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0m-6.5 6.375A2.625 2.625 0 0 1 4.875 7h14.25a2.625 2.625 0 0 1 0 5.25h-2.628l1.823 8.208a2.5 2.5 0 0 1-2.44 3.042h-2.142L12 17.198L10.261 23.5H8.12a2.5 2.5 0 0 1-2.44-3.042l1.823-8.208H4.875A2.625 2.625 0 0 1 2.25 9.625M4.875 9a.625.625 0 1 0 0 1.25h5.122L7.632 20.892a.5.5 0 0 0 .488.608h.619l2-7.25h2.522l2 7.25h.62a.5.5 0 0 0 .487-.608L14.003 10.25h5.122a.625.625 0 1 0 0-1.25z"></svg:path>`,
})
export class TdesignAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
