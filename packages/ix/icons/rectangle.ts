import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRectangleIcon],svg[ix-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zm-42.667 42.667H85.334v213.333h341.333z"></svg:path>`,
})
export class IxRectangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
