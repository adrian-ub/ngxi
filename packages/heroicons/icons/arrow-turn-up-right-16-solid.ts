import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnUpRight16SolidIcon],svg[heroicons-arrow-turn-up-right-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 14a.75.75 0 0 0 .75-.75v-6.5h7.94l-.97.97a.75.75 0 0 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97H2.75A.75.75 0 0 0 2 6v7.25c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnUpRight16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
