import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnLeftDown20SolidIcon],svg[heroicons-arrow-turn-left-down-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 3.75a.75.75 0 0 1-.75.75h-7.5v10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l1.97 1.97V3.75A.75.75 0 0 1 7 3h8.25a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnLeftDown20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
