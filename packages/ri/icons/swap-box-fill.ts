import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwapBoxFillIcon],svg[ri-swap-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4v2h-4v2h4v2l3.5-3zm-6 10v-2h4v-2h-4v-2l-3.5 3z"></svg:path>`,
})
export class RiSwapBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
