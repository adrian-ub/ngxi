import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faDashcubeIcon],svg[fa-dashcube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 680q0-131 91.5-226.5T314 358h742L1408 0v1470q0 132-91.5 227t-222.5 95H314q-131 0-222.5-95T0 1470zm1232 754l-176-180V829q0-46-32-79t-78-33H462q-46 0-78 33t-32 79v492q0 46 32.5 79.5T462 1434z"></svg:path>`,
})
export class FaDashcubeIcon {
  readonly viewBox = input("0 0 1408 1792")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
