import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCalculatorIcon],svg[heroicons-solid-calculator-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm6 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-3 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm-4 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m4-4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM9 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1M7 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCalculatorIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
