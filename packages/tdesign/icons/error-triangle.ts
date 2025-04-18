import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignErrorTriangleIcon],svg[tdesign-error-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l11.951 20.7H.05zM3.513 19.7h16.974L12 5zM13 9.5V15h-2V9.5zm-2 7h2.004v2.004H11z"></svg:path>`,
})
export class TdesignErrorTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
