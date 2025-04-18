import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTriangleIcon],svg[proicons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M5.732 20.5c-2.29 0-3.723-2.498-2.581-4.5L9.419 5.006c1.144-2.008 4.018-2.008 5.163 0L20.849 16c1.142 2.002-.291 4.5-2.581 4.5z"></svg:path>`,
})
export class ProiconsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
