import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBitCoinLineIcon],svg[ri-bit-coin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-4h-3v-8h3v-2h2v2h1a2.5 2.5 0 0 1 2 4a2.5 2.5 0 0 1-2 4h-1v2h-2zm-1-3v1h4a.5.5 0 0 0 0-1zm0-3v1h4a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class RiBitCoinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
