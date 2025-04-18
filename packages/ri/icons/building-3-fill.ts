import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBuilding3FillIcon],svg[ri-building-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.111V1l11 6v14H3V7z"></svg:path>`,
})
export class RiBuilding3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
