import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinShoppingIcon],svg[hugeicons-bitcoin-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.3 17.191L3.16 10.26c-.172-1.048-.258-1.572.018-1.916S3.96 8 4.976 8h14.048c1.015 0 1.522 0 1.798.343s.19.868.018 1.916l-1.14 6.932c-.379 2.298-.567 3.447-1.339 4.128S16.477 22 14.253 22H9.747c-2.224 0-3.336 0-4.108-.681s-.96-1.83-1.338-4.128"></svg:path><svg:path d="M10.438 17.667v-5.334m1.562 0V11m0 8v-1.333M10.438 15h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 15c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5M17 8c0-3.314-1.5-6-5-6S7 4.686 7 8"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinShoppingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
