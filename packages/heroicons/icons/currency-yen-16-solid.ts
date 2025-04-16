import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCurrencyYen16SolidIcon],svg[heroicons-currency-yen-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.6 3.55a.75.75 0 1 0-1.2.9L7.063 8H4.75a.75.75 0 0 0 0 1.5h2.5v1h-2.5a.75.75 0 0 0 0 1.5h2.5v.5a.75.75 0 0 0 1.5 0V12h2.5a.75.75 0 0 0 0-1.5h-2.5v-1h2.5a.75.75 0 0 0 0-1.5H8.938L11.6 4.45a.75.75 0 1 0-1.2-.9L8 6.75z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCurrencyYen16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
