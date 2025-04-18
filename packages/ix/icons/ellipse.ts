import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEllipseIcon],svg[ix-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667c117.824 0 213.334 66.859 213.334 149.333S373.824 405.334 256 405.334S42.667 338.475 42.667 256c0-82.474 95.51-149.333 213.333-149.333m0 42.667c-96.853 0-170.666 52.842-170.666 106.666S159.147 362.667 256 362.667c96.854 0 170.667-52.843 170.667-106.667S352.854 149.334 256 149.334"></svg:path>`,
})
export class IxEllipseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
