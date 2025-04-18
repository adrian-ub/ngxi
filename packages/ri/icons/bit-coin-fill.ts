import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBitCoinFillIcon],svg[ri-bit-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4a2.5 2.5 0 0 0-2-4h-1v-2h-2v2h-3v8zm-1-3h4a.5.5 0 0 1 0 1h-4zm0-3h4a.5.5 0 0 1 0 1h-4z"></svg:path>`,
})
export class RiBitCoinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
