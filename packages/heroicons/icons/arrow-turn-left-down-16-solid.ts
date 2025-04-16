import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnLeftDown16SolidIcon],svg[heroicons-arrow-turn-left-down-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.47 2.22A.75.75 0 0 1 6 2h7.25a.75.75 0 0 1 0 1.5h-6.5v7.94l.97-.97a.75.75 0 0 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V2.75a.75.75 0 0 1 .22-.53" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnLeftDown16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
