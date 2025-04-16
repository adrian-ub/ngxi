import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidRewindIcon],svg[heroicons-solid-rewind-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.445 14.832A1 1 0 0 0 10 14v-2.798l5.445 3.63A1 1 0 0 0 17 14V6a1 1 0 0 0-1.555-.832L10 8.798V6a1 1 0 0 0-1.555-.832l-6 4a1 1 0 0 0 0 1.664z"></svg:path>`,
})
export class HeroiconsSolidRewindIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
