import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidGiftIcon],svg[heroicons-solid-gift-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 5a3 3 0 0 1 5-2.236A3 3 0 0 1 14.83 6H16a2 2 0 1 1 0 4h-5V9a1 1 0 1 0-2 0v1H4a2 2 0 1 1 0-4h1.17C5.06 5.687 5 5.35 5 5m4 1V5a1 1 0 1 0-1 1zm3 0a1 1 0 1 0-1-1v1z" clip-rule="evenodd"></svg:path><svg:path d="M9 11H3v5a2 2 0 0 0 2 2h4zm2 7h4a2 2 0 0 0 2-2v-5h-6z"></svg:path></svg:g>`,
})
export class HeroiconsSolidGiftIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
