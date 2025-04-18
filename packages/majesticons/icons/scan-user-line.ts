import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsScanUserLineIcon],svg[majesticons-scan-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3H5a2 2 0 0 0-2 2v2m0 10v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2m0-10V5a2 2 0 0 0-2-2h-2"></svg:path><svg:circle cx="12" cy="9" r="3"></svg:circle><svg:path d="M17 16c0-2.21-2.239-4-5-4s-5 1.79-5 4"></svg:path></svg:g>`,
})
export class MajesticonsScanUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
