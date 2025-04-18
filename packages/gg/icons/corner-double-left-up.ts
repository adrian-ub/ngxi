import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleLeftUpIcon],svg[gg-corner-double-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.784 9.25L6.37 7.836l4.242-4.242l4.243 4.242L13.44 9.25l-2.829-2.828z"></svg:path><svg:path d="m13.44 13.493l1.415-1.414l-4.243-4.243L6.37 12.08l1.414 1.414l1.847-1.847v4.76a4 4 0 0 0 4 4h4v-2h-4a2 2 0 0 1-2-2v-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
