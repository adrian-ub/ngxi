import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyExchange03Icon],svg[hugeicons-money-exchange-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c0-3.317 2.683-6 6-6l-.857 1.714M22 14c0 3.317-2.683 6-6 6l.857-1.714m.393-15.77c1.83-.755 3.442-.504 4.315-.344c.249.046.435.29.435.573v6.46c0 .338-.262.59-.56.538c-.896-.159-2.443-.355-4.19.365c-1.878.775-3.768.92-4.8.888c-.256-.008-.45-.25-.45-.54v-6.46c0-.333.255-.595.551-.59c1.05.02 2.88-.14 4.699-.89m-10 11c1.83-.755 3.441-.504 4.315-.344c.249.046.435.29.435.573v6.46c0 .338-.262.59-.56.538c-.896-.159-2.443-.355-4.19.366c-1.878.774-3.768.92-4.8.887c-.256-.008-.45-.25-.45-.54v-6.461c0-.333.255-.595.551-.59c1.05.02 2.88-.14 4.699-.89M17 6.5h.009M7 17.5h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsMoneyExchange03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
