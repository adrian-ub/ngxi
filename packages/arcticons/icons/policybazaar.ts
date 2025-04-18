import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolicybazaarIcon],svg[arcticons-policybazaar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.215 23.142a2.46 2.46 0 0 1 2.453-2.453h0a2.46 2.46 0 0 1 2.452 2.453v1.594a2.46 2.46 0 0 1-2.452 2.453h0a2.46 2.46 0 0 1-2.453-2.453m0 2.575V17.5m-7.335 7.359a2.46 2.46 0 0 0 2.452 2.452h0a2.46 2.46 0 0 0 2.453-2.453v-1.594a2.46 2.46 0 0 0-2.453-2.453h0a2.46 2.46 0 0 0-2.452 2.453m0-2.575V30.5"></svg:path>`,
})
export class ArcticonsPolicybazaarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
