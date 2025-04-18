import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRectangleFilledIcon],svg[tdesign-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2z"></svg:path>`,
})
export class TdesignRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
