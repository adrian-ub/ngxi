import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownRightIcon],svg[mynaui-fat-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.077q3.303 4.216 5.866 4.785q2.564.569 4.88.172V4L21 12.214L13.747 20v-4.784Q9.46 15.18 6.46 12T3 4.077"></svg:path>`,
})
export class MynauiFatCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
