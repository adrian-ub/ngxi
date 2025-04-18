import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlaskLineIcon],svg[majesticons-flask-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h2m6 0h-2m0 0v5.46a2 2 0 0 0 .272 1.007L15.75 12l3.495 5.992c.778 1.334-.184 3.008-1.727 3.008H6.482c-1.544 0-2.505-1.674-1.727-3.008L8.25 12l1.478-2.533A2 2 0 0 0 10 8.459V3m4 0h-4"></svg:path>`,
})
export class MajesticonsFlaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
