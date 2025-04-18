import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerRightUpFillIcon],svg[ri-corner-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19H5v-2h7V9.414H6.586L13 3l6.414 6.414H14z"></svg:path>`,
})
export class RiCornerRightUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
