import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTurnDownLeft20SolidIcon],svg[heroicons-arrow-turn-down-left-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.25 3a.75.75 0 0 0-.75.75v7.5H4.56l1.97-1.97a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-1.97-1.97h11.69A.75.75 0 0 0 17 12V3.75a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsArrowTurnDownLeft20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
