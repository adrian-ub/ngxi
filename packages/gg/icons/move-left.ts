import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoveLeftIcon],svg[gg-move-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.071 17v-2h-8v2zm0-8V7h-8v2z"></svg:path><svg:path d="M19.071 13v-2h-10V7.965l-4.071 4l4.071 4V13z"></svg:path></svg:g>`,
})
export class GgMoveLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
