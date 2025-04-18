import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTrapezoidIcon],svg[icon-park-outline-trapezoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="4" d="M31.794 8H16.206a3 3 0 0 0-2.864 2.105l-8.125 26A3 3 0 0 0 8.081 40h31.838a3 3 0 0 0 2.864-3.895l-8.125-26A3 3 0 0 0 31.794 8Z"></svg:path>`,
})
export class IconParkOutlineTrapezoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
