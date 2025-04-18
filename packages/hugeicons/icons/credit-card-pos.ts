import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardPosIcon],svg[hugeicons-credit-card-pos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.346 16.198l12.829-12.83m2.457 7.688l-2.2 2.2m-1.877 1.854l-.979.979m-10.401.052a4.01 4.01 0 0 1 0-5.672l7.294-7.294a4.01 4.01 0 0 1 5.672 0l4.684 4.684a4.01 4.01 0 0 1 0 5.672l-7.294 7.294a4.01 4.01 0 0 1-5.672 0zM4 22h16" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardPosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
