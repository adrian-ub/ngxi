import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerLeftDownFillIcon],svg[ri-corner-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h9v2h-7v7.586h5.414L11 21l-6.414-6.414H10z"></svg:path>`,
})
export class RiCornerLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
