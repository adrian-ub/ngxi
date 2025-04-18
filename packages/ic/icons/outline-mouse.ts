import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineMouseIcon],svg[ic-outline-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84m-7-5.84V9H6a6.005 6.005 0 0 1 5-5.84M18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12z"></svg:path>`,
})
export class IcOutlineMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
