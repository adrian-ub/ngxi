import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownRectangleIcon],svg[tdesign-arrow-down-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm9 2.5v7.586l3-3l1.414 1.414L12 17.914L6.586 12.5L8 11.086l3 3V6.5z"></svg:path>`,
})
export class TdesignArrowDownRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
