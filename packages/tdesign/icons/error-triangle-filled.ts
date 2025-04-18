import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignErrorTriangleFilledIcon],svg[tdesign-error-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.951 21.7H.05L12 1zM11 15h2V9.5h-2zm2.004 1.5H11v2.004h2.004z"></svg:path>`,
})
export class TdesignErrorTriangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
