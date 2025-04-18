import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZapIcon],svg[arcticons-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.303 34.086a9.197 9.197 0 1 0-2.735-17.982a13.85 13.85 0 1 0-13.22 17.982"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.5 26.561l-4.285 7.525h7.787l-4.286 7.525"></svg:path>`,
})
export class ArcticonsZapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
