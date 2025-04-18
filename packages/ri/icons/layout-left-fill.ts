import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutLeftFillIcon],svg[ri-layout-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9V3zM7 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4z"></svg:path>`,
})
export class RiLayoutLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
