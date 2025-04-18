import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightDownIcon],svg[mynaui-fat-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.077 3q4.216 3.303 4.785 5.866q.569 2.564.172 4.88H4L12.214 21L20 13.747h-4.784Q15.18 9.46 12 6.46T4.077 3"></svg:path>`,
})
export class MynauiFatCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
