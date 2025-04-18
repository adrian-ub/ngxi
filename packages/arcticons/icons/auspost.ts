import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuspostIcon],svg[arcticons-auspost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.753 31.973v13.41m0-42.765v2.474M16.296 3.93v40.143m5.457-38.98a13.514 13.514 0 1 1 0 26.88m0-29.354a21.5 21.5 0 1 1 0 42.764m-5.457-1.31a21.5 21.5 0 0 1 0-40.145"></svg:path>`,
})
export class ArcticonsAuspostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
