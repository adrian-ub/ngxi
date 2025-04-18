import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnForwardFillIcon],svg[ri-arrow-turn-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v5a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V8h4l-5-6l-5 6z"></svg:path>`,
})
export class RiArrowTurnForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
