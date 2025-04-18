import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRectangleIcon],svg[tdesign-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4z"></svg:path>`,
})
export class TdesignRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
