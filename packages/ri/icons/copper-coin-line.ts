import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopperCoinLineIcon],svg[ri-copper-coin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-12.95l4.95 4.95l-4.95 4.95l-4.95-4.95zm0 2.828l-2.121 2.122l2.12 2.121l2.122-2.121z"></svg:path>`,
})
export class RiCopperCoinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
