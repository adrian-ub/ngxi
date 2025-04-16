import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBellSlashSolidIcon],svg[heroicons-bell-slash-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06zm17.04 14.006q-.335.123-.674.238L7.319 4.137A6.75 6.75 0 0 1 18.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206"></svg:path><svg:path fill-rule="evenodd" d="M5.25 9q0-.276.022-.546l10.384 10.384a3.751 3.751 0 0 1-7.396-1.119a24.6 24.6 0 0 1-4.831-1.244a.75.75 0 0 1-.298-1.205A8.22 8.22 0 0 0 5.25 9.75zm4.502 8.9l-.002.1a2.25 2.25 0 1 0 4.498-.1a25 25 0 0 1-4.496 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsBellSlashSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
