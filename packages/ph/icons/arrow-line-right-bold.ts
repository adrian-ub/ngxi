import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineRightBoldIcon],svg[ph-arrow-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.49 119.51a12 12 0 0 1 0 17l-72 72a12 12 0 0 1-17-17L147 140H32a12 12 0 0 1 0-24h115L95.51 64.49a12 12 0 0 1 17-17ZM216 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
