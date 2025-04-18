import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFoodTakeoutBoxIcon],svg[mdi-food-takeout-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.26 11h13.48l-.67 9H5.93zM9 4h5.97L19 7.38l1.59-1.59L22 7.21L19.21 10H4.79L2 7.21L3.41 5.8L5 7.38z"></svg:path>`,
})
export class MdiFoodTakeoutBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
