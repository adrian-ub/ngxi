import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEBike2FillIcon],svg[ri-e-bike-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.545A4 4 0 1 1 15.126 19h-4.252a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1zm3 15a2 2 0 1 0 1.88 1.316l-.017-.044A2 2 0 0 0 19 16M7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2-8H4v2h5zm11-3h-3v2h3z"></svg:path>`,
})
export class RiEBike2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
