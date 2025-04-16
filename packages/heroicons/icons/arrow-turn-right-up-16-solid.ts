import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnRightUp16SolidIcon],svg[heroicons-arrow-turn-right-up-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 13.25a.75.75 0 0 1 .75-.75h6.5V4.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v8.69A.75.75 0 0 1 10 14H2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnRightUp16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
