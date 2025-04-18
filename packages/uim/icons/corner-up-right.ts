import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCornerUpRightIcon],svg[uim-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.608 8.01a1 1 0 0 0-.216-1.089l-4.628-4.628a1 1 0 0 0-1.414 1.414l2.921 2.921H8.314a4.005 4.005 0 0 0-4 4V21a1 1 0 0 0 2 0V10.628a2 2 0 0 1 2-2h7.958L13.35 11.55a1 1 0 1 0 1.414 1.414l4.628-4.628a1 1 0 0 0 .216-.325Z"></svg:path>`,
})
export class UimCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
