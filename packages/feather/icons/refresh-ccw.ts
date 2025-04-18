import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherRefreshCcwIcon],svg[feather-refresh-ccw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 4v6h6m16 10v-6h-6"></svg:path><svg:path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></svg:path></svg:g>`,
})
export class FeatherRefreshCcwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
