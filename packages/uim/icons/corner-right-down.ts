import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCornerRightDownIcon],svg[uim-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.707 13.35a1 1 0 0 0-1.414 0l-2.921 2.921V8.314a4.005 4.005 0 0 0-4-4H3a1 1 0 0 0 0 2h10.372a2 2 0 0 1 2 2v7.958L12.45 13.35a1 1 0 0 0-1.414 1.414l4.628 4.628a1.004 1.004 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class UimCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
