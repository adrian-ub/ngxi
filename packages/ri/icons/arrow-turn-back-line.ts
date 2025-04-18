import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnBackLineIcon],svg[ri-arrow-turn-back-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.172l-2.535-2.536l-1.414 1.414L18 22l4.95-4.95l-1.415-1.414L19 18.172V11a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z"></svg:path>`,
})
export class RiArrowTurnBackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
