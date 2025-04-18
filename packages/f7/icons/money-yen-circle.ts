import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyYenCircleIcon],svg[f7-money-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m-5.548 8.857l5.71 10.21h.095l5.71-10.21h3.864L30.85 28.674h4.501v1.797h-5.423V33h5.423v1.797h-5.423v4.564H26.46v-4.564h-5.423V33h5.423v-2.53h-5.423v-1.797h4.5l-6.966-11.817z"></svg:path>`,
})
export class F7MoneyYenCircleIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
