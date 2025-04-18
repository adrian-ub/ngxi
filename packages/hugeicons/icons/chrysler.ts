import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChryslerIcon],svg[hugeicons-chrysler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 22v-3a7 7 0 1 1 14 0v3"></svg:path><svg:path d="M9 22v-2a3 3 0 1 1 6 0v2m-7-9v-1a4 4 0 1 1 8 0v1"></svg:path><svg:path d="M9 9V7a3 3 0 1 1 6 0v2m-3-5V2m0 10v-1m0-3V7m0 10v-2m-4 4h1m6 0h1"></svg:path></svg:g>`,
})
export class HugeiconsChryslerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
