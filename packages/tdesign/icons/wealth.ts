import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWealthIcon],svg[tdesign-wealth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.5h10.5v2.75c0 1.57-.69 2.98-1.783 3.942a9.03 9.03 0 0 1 4.41 3.951l.485.875l-1.75.97l-.484-.875A7 7 0 0 0 5 17.5v.5a2 2 0 0 0 2 2h7v2H7a4 4 0 0 1-4-4v-.5a9 9 0 0 1 5.533-8.308A5.24 5.24 0 0 1 6.75 5.25zm5.25 6a3.25 3.25 0 0 0 3.25-3.25V4.5h-6.5v.75A3.25 3.25 0 0 0 12 8.5m4 7.5h7v2h-7zm0 4h7v2h-7z"></svg:path>`,
})
export class TdesignWealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
