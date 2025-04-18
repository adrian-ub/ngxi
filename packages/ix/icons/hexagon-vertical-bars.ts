import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsIcon],svg[ix-hexagon-vertical-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.246l192 110.851V366.8L256 477.65L64 366.8V145.097zm0 49.259l-149.333 86.208V342.17L256 428.38l149.333-86.229V169.734zM277.333 160v192h-42.666V160zM192 202.666v106.667h-42.667V202.666zm170.667 0v106.667H320V202.666z"></svg:path>`,
})
export class IxHexagonVerticalBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
