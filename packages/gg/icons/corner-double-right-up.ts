import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleRightUpIcon],svg[gg-corner-double-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.216 9.25l1.415-1.414l-4.243-4.242l-4.243 4.242L10.56 9.25l2.828-2.828z"></svg:path><svg:path d="M10.56 13.493L9.145 12.08l4.243-4.243l4.243 4.243l-1.415 1.414l-1.847-1.847v4.76a4 4 0 0 1-4 4h-4v-2h4a2 2 0 0 0 2-2v-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
