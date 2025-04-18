import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiParkingIcon],svg[zmdi-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 0q53 0 90.5 37.5T277 128t-37.5 90.5T149 256H85v128H0V0zm5 171q17 0 29.5-12.5T196 128t-12.5-30.5T154 85H85v86z"></svg:path>`,
})
export class ZmdiParkingIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
