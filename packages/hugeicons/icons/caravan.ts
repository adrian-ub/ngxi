import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCaravanIcon],svg[hugeicons-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.1 18h1.4c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883M19.1 18v-6.604c0-2.072-.359-3.137-1.722-4.685C15.546 4.629 14.371 4 11.57 4H6.222c-1.99 0-2.985 0-3.604.683C2 5.367 2 6.467 2 8.667v4.666c0 2.2 0 3.3.618 3.984C3.237 18 4.232 18 6.222 18H7m12.1 0H11"></svg:path><svg:circle cx="9" cy="18" r="2"></svg:circle><svg:path d="M5 9.5c0-1.179 0-1.768.342-2.134C5.683 7 6.233 7 7.333 7h2.334c1.1 0 1.65 0 1.991.366S12 8.321 12 9.5s0 1.768-.342 2.134c-.341.366-.891.366-1.991.366H7.333c-1.1 0-1.65 0-1.991-.366S5 10.678 5 9.5"></svg:path></svg:g>`,
})
export class HugeiconsCaravanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
