import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneySafeIcon],svg[hugeicons-money-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2h-2C6.757 2 4.636 2 3.318 3.318S2 6.758 2 11s0 6.364 1.318 7.682S6.758 20 11 20h2c4.243 0 6.364 0 7.682-1.318S22 15.242 22 11s0-6.364-1.318-7.682S17.242 2 13 2"></svg:path><svg:path d="M17 15c1-.53 1-1.385 1-3.094v-1.812C18 8.385 18 7.53 17 7m1 15v-2M6 22v-2m3.5-7a2.01 2.01 0 0 0 2.02-2c0-1.105-.904-2-2.02-2m0 4a2.01 2.01 0 0 1-2.02-2c0-1.105.904-2 2.02-2m0 4v2m0-6V7m-1.75 5L6 13m7-4l-1.75 1m0 2L13 13M6 9l1.75 1"></svg:path></svg:g>`,
})
export class HugeiconsMoneySafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
