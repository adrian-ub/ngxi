import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotVerticalIcon],svg[tdesign-tree-round-dot-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.126 4A4.002 4.002 0 0 1 23 5a4 4 0 0 1-7.874 1H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.126A4.002 4.002 0 0 1 23 19a4 4 0 0 1-7.874 1H14a3 3 0 0 1-3-3v-4H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H11V7a3 3 0 0 1 3-3zM19 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignTreeRoundDotVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
