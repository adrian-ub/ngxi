import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProductHuntFillIcon],svg[ri-product-hunt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 1 0 0-7"></svg:path>`,
})
export class RiProductHuntFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
