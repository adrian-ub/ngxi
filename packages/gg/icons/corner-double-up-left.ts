import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleUpLeftIcon],svg[gg-corner-double-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.25 7.784L7.836 6.369l-4.242 4.243l4.242 4.243L9.25 13.44l-2.828-2.828z"></svg:path><svg:path d="m13.493 13.44l-1.414 1.415l-4.243-4.243L12.08 6.37l1.414 1.415l-1.847 1.846h4.76a4 4 0 0 1 4 4v4h-2v-4a2 2 0 0 0-2-2h-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
