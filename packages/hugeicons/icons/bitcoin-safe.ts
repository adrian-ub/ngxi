import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinSafeIcon],svg[hugeicons-bitcoin-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 2h2c4.243 0 6.364 0 7.682 1.318S22 6.758 22 11s0 6.364-1.318 7.682S17.242 20 13 20h-2c-4.243 0-6.364 0-7.682-1.318S2 15.242 2 11s0-6.364 1.318-7.682S6.758 2 11 2"></svg:path><svg:path d="M7 15c-1-.53-1-1.385-1-3.094v-1.812C6 8.385 6 7.53 7 7m11 15v-2M6 22v-2m6.938-6.333V8.333m1.562 0V7m0 8v-1.333M12.938 11h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H12M16.063 11c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H12"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinSafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
