import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapPostBoxIcon],svg[map-post-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.999 4.518C21.701 4.518 16 10.297 16 17.427V48h5V38h16v10h5V17.427c0-7.13-5.7-12.909-13.001-12.909M4 2l7.364 12h.768C12.598 9 16 4.896 21 3.043V2z"></svg:path>`,
})
export class MapPostBoxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
