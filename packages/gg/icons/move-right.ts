import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoveRightIcon],svg[gg-move-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 17v-2h8v2zm0-8V7h8v2z"></svg:path><svg:path d="M5 13v-2h10V7.965l4.071 4l-4.071 4V13z"></svg:path></svg:g>`,
})
export class GgMoveRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
