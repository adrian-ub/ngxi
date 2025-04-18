import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoin02Icon],svg[hugeicons-bitcoin-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 8a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0-5.25V5.5m-.75-2.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-5.5 0V5.5L7 6.5M5 2.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m13.25 0V5.5L17 6.5m2-3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path d="M10.438 17.667v-5.334m1.562 0V11m0 8v-1.333M10.438 15h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 15c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoin02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
