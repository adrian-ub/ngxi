import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsTriangleIcon],svg[humbleicons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.125 2.584a1 1 0 0 1 1.75 0l8.805 15.932A1 1 0 0 1 20.805 20H3.195a1 1 0 0 1-.875-1.484z"></svg:path>`,
})
export class HumbleiconsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
