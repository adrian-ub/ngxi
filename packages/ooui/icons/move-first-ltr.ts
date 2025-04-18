import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMoveFirstLtrIcon],svg[ooui-move-first-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v18H3zm13.5 1.5L15 1l-9 9l9 9l1.5-1.5L9 10z"></svg:path>`,
})
export class OouiMoveFirstLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
