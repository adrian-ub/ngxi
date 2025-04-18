import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnRightDown16SolidIcon],svg[heroicons-arrow-turn-right-down-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.75c0 .414.336.75.75.75h6.5v7.94l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97V2.75A.75.75 0 0 0 10 2H2.75a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnRightDown16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
