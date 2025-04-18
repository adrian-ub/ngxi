import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineMoneyIcon],svg[ic-baseline-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1z"></svg:path><svg:path fill="currentColor" d="M2 4v16h20V4zm2 14V6h16v12z"></svg:path>`,
})
export class IcBaselineMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
