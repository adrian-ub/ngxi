import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinEyeIcon],svg[hugeicons-bitcoin-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.75 2.75L7 5v2m12.25-4.25L17 5v2m-5-4.25V6M4.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m14.5 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M12 3.5A.75.75 0 1 0 12 2a.75.75 0 0 0 0 1.5m-1.562 14.667v-5.334m1.562 0V11.5m0 8v-1.333M10.438 15.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path><svg:path d="M12 9c6 0 10 6.5 10 6.5S18 22 12 22S2 15.5 2 15.5S6 9 12 9"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
