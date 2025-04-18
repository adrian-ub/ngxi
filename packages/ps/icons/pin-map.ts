import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPinMapIcon],svg[ps-pin-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 0Q101 0 53 53.5T5 192q0 95 154 311l17 24l17-24q154-216 154-311q0-85-48-138.5T176 0m0 454q-47-68-87.5-144.5T48 192q0-61 33.5-105T176 43t94.5 44T304 192q0 41-40.5 117.5T176 454m0-369q-35 0-60 25.5T91 171t25 60t60 25t60-25t25-60t-25-60.5T176 85m0 128q-17 0-30-12.5T133 171q0-18 13-30.5t30-12.5t30 12.5t13 30.5q0 17-13 29.5T176 213"></svg:path>`,
})
export class PsPinMapIcon {
  readonly viewBox = input("0 0 352 528")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
