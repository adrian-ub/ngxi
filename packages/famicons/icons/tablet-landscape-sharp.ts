import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTabletLandscapeSharpIcon],svg[famicons-tablet-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82m448 330H64V100h384Z"></svg:path>`,
})
export class FamiconsTabletLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
