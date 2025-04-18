import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBankCard2LineIcon],svg[ri-bank-card-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 9h-16v7h16zm0-4V5h-16v3z"></svg:path>`,
})
export class RiBankCard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
