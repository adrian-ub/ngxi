import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMoveVerticalIcon],svg[bx-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17l5 5l5-5h-4V7h4l-5-5l-5 5h4v10z"></svg:path>`,
})
export class BxMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
