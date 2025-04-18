import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnForwardLineIcon],svg[ri-arrow-turn-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.828V13a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V5.828l2.536 2.536L22.95 6.95L18 2l-4.95 4.95l1.415 1.414z"></svg:path>`,
})
export class RiArrowTurnForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
