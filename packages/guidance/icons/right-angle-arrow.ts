import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRightAngleArrowIcon],svg[guidance-right-angle-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 24c0-.741-.733-1.85-1.475-2.78c-.954-1.2-2.094-2.247-3.401-3.046C2.144 17.575.956 17 0 17m0 0c.956 0 2.145-.575 3.124-1.174c1.307-.8 2.447-1.847 3.401-3.045C7.267 11.85 8 10.74 8 10m-8 7h11.5c6.627 0 12-5.373 12-12V0"></svg:path>`,
})
export class GuidanceRightAngleArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
