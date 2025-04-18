import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnUpLeft20SolidIcon],svg[heroicons-arrow-turn-up-left-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.25 17a.75.75 0 0 1-.75-.75v-7.5H4.56l1.97 1.97a.75.75 0 1 1-1.06 1.06L2.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 1.06L4.56 7.25h11.69A.75.75 0 0 1 17 8v8.25a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnUpLeft20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
