import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDownRightIcon],svg[gg-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 13.4a2 2 0 0 1-2-2v-8h-2v8a4 4 0 0 0 4 4h10.306l-3.785 3.785l1.415 1.414l6.364-6.364l-6.364-6.364l-1.415 1.415l4.115 4.115z"></svg:path>`,
})
export class GgCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
