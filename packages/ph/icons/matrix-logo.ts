import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoIcon],svg[ph-matrix-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13a31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z"></svg:path>`,
})
export class PhMatrixLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
