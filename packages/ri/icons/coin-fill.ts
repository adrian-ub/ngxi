import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoinFillIcon],svg[ri-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.005 12.003v2c0 3.314-4.925 6-11 6c-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-2c0 3.313 4.925 6 11 6s11-2.687 11-6m-11-8c6.075 0 11 2.686 11 6s-4.925 6-11 6s-11-2.687-11-6s4.925-6 11-6"></svg:path>`,
})
export class RiCoinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
