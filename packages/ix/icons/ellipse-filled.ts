import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEllipseFilledIcon],svg[ix-ellipse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667c117.824 0 213.334 66.859 213.334 149.333S373.824 405.334 256 405.334S42.667 338.475 42.667 256c0-82.474 95.51-149.333 213.333-149.333"></svg:path>`,
})
export class IxEllipseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
