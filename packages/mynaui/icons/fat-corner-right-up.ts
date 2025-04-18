import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightUpIcon],svg[mynaui-fat-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.077 21q4.216-3.303 4.785-5.866q.569-2.564.172-4.88H4L12.214 3L20 10.253h-4.784Q15.18 14.54 12 17.54T4.077 21"></svg:path>`,
})
export class MynauiFatCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
