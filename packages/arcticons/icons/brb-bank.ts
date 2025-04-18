import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrbBankIcon],svg[arcticons-brb-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.356 39.415h27.397L42.5 8.585H9.443L5.558 33.82a4.855 4.855 0 0 0 4.798 5.594m6.178-9.757l16.187-13.321"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.111 39.415c0-13.653-10.139-24.938-23.298-26.735"></svg:path>`,
})
export class ArcticonsBrbBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
