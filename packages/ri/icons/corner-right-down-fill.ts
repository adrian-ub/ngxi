import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerRightDownFillIcon],svg[ri-corner-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5H5v2h7v7.586H6.586L13 21l6.414-6.414H14z"></svg:path>`,
})
export class RiCornerRightDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
