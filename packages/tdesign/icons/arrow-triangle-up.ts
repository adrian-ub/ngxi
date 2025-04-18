import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleUpIcon],svg[tdesign-arrow-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12v10h6V12h4.5L12 2L4.5 12zm-.5-2L12 5.333L15.5 10H13v10h-2V10z"></svg:path>`,
})
export class TdesignArrowTriangleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
