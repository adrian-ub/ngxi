import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyRupeeCircleFillIcon],svg[ri-money-rupee-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-14c.328.436.563.946.675 1.5H16V11h-1.825a3.75 3.75 0 0 1-3.675 3h-.19l3.72 3.72l-1.06 1.06L8 13.81V12.5h2.5a2.25 2.25 0 0 0 2.122-1.5H8V9.5h4.622A2.25 2.25 0 0 0 10.5 8H8V6.5h8V8z"></svg:path>`,
})
export class RiMoneyRupeeCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
