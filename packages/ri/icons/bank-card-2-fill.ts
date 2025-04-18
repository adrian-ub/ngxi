import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBankCard2FillIcon],svg[ri-bank-card-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 11v9a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-9zm0-4h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiBankCard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
