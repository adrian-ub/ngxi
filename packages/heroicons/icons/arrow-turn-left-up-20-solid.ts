import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnLeftUp20SolidIcon],svg[heroicons-arrow-turn-left-up-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 16.25a.75.75 0 0 0-.75-.75h-7.5V4.56l1.97 1.97a.75.75 0 1 0 1.06-1.06L7.53 2.22a.75.75 0 0 0-1.06 0L3.22 5.47a.75.75 0 0 0 1.06 1.06l1.97-1.97v11.69c0 .414.336.75.75.75h8.25a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnLeftUp20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
