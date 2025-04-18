import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleDownIcon],svg[tdesign-arrow-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12V2h6v10h4.5L12 22L4.5 12zm-.5 2l3.5 4.667L15.5 14H13V4h-2v10z"></svg:path>`,
})
export class TdesignArrowTriangleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
