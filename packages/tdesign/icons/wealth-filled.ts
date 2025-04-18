import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWealthFilledIcon],svg[tdesign-wealth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.5h10.5v2.75c0 1.57-.69 2.98-1.783 3.942a9.03 9.03 0 0 1 4.41 3.951l.215.388A5.5 5.5 0 0 0 14.89 22H7a4 4 0 0 1-4-4v-.5a9 9 0 0 1 5.533-8.308A5.24 5.24 0 0 1 6.75 5.25z"></svg:path><svg:path fill="currentColor" d="M23 18v-2h-7v2zm0 4v-2h-7v2z"></svg:path>`,
})
export class TdesignWealthFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
