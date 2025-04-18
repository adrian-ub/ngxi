import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnBackFillIcon],svg[ri-arrow-turn-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16h-4l5 6l5-6h-4v-5a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z"></svg:path>`,
})
export class RiArrowTurnBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
