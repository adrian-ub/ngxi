import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutTopFillIcon],svg[ri-layout-top-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiLayoutTopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
