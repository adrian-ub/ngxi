import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMoveLastLtrIcon],svg[ooui-move-last-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1h2v18h-2zM3.5 2.5L11 10l-7.5 7.5L5 19l9-9l-9-9z"></svg:path>`,
})
export class OouiMoveLastLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
