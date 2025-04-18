import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwapFillIcon],svg[ri-swap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-5-13h2v4h2v-4h2l-3-3.5zm10 6h-2v-4h-2v4h-2l3 3.5z"></svg:path>`,
})
export class RiSwapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
