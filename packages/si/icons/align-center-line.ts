import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignCenterLineIcon],svg[si-align-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M3 6h18M3 14h18M6 18h12"></svg:path>`,
})
export class SiAlignCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
