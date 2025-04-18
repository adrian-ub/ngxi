import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutVerticalFillIcon],svg[ri-layout-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 14V7h2v10zm4-10h2v10h-2zm4 0h2v10h-2z"></svg:path>`,
})
export class RiLayoutVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
