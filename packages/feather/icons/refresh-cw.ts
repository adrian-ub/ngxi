import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherRefreshCwIcon],svg[feather-refresh-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M23 4v6h-6M1 20v-6h6"></svg:path><svg:path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></svg:path></svg:g>`,
})
export class FeatherRefreshCwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
