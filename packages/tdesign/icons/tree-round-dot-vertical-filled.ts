import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotVerticalFilledIcon],svg[tdesign-tree-round-dot-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4.5a3.5 3.5 0 0 1-6.855 1H14a1 1 0 0 0-1 1v11c0 1.004.408 1.003.925 1h2.22a3.502 3.502 0 0 1 6.855 1a3.5 3.5 0 0 1-6.855 1H14a3 3 0 0 1-3-3V13H7.855A3.502 3.502 0 0 1 1 12a3.5 3.5 0 0 1 6.855-1H11V6.5a3 3 0 0 1 3-3h2.145A3.502 3.502 0 0 1 23 4.5"></svg:path>`,
})
export class TdesignTreeRoundDotVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
