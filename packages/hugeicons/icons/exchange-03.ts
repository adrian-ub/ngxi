import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExchange03Icon],svg[hugeicons-exchange-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.125 20.5v-6m1.875 0V13m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H15m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H15M11 5c2.828 0 5.243 0 6.121.799S18 7.429 18 10l-2-1m-4 11c-2.828 0-5.243 0-6.121-.799S5 17.571 5 15l2 1M5.5 3.25c-1.38 0-2.5.84-2.5 1.875S4.12 7 5.5 7S8 7.84 8 8.875S6.88 10.75 5.5 10.75m0-7.5c1.089 0 2.015.522 2.358 1.25M5.5 3.25V2m0 8.75c-1.089 0-2.015-.522-2.358-1.25M5.5 10.75V12" color="currentColor"></svg:path>`,
})
export class HugeiconsExchange03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
