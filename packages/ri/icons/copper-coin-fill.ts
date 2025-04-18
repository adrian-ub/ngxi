import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopperCoinFillIcon],svg[ri-copper-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-14.243l-4.243 4.243l4.243 4.242l4.242-4.242z"></svg:path>`,
})
export class RiCopperCoinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
