import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBinaryeyeIcon],svg[arcticons-binaryeye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 33.23a11.73 11.73 0 0 1 0-23.46a12 12 0 0 1 2.3.23a6.51 6.51 0 1 0 8.33 10a6 6 0 0 0 .83-.84a11.5 11.5 0 0 1 .27 2.34A11.73 11.73 0 0 1 24 35.73"></svg:path>`,
})
export class ArcticonsBinaryeyeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
