import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnUpLeft16SolidIcon],svg[heroicons-arrow-turn-up-left-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 14a.75.75 0 0 1-.75-.75v-6.5H4.56l.97.97a.75.75 0 0 1-1.06 1.06L2.22 6.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 1.06l-.97.97h8.69A.75.75 0 0 1 14 6v7.25a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnUpLeft16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
