import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChanBurauzaIcon],svg[arcticons-chan-burauza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.462 24.472c0-2.398.488-4.686 1.6-7.114L4.5 6.156L15.94 9.01C19.148 7.59 21.436 7.1 24 7.1s4.853.489 8.06 1.91L43.5 6.156l-3.561 11.202c1.11 2.428 1.6 4.716 1.6 7.114c0 9.595-7.778 17.372-17.539 17.372S6.462 34.066 6.462 24.472"></svg:path><svg:circle cx="31.583" cy="23.671" r="3.621" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.985" cy="23.671" r="3.621" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsChanBurauzaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
