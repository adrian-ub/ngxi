import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRectangleFilledIcon],svg[ix-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667z"></svg:path>`,
})
export class IxRectangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
