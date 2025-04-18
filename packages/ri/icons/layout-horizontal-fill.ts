import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutHorizontalFillIcon],svg[ri-layout-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 6V7h10v2zm0 4v-2h10v2zm10 4H7v-2h10z"></svg:path>`,
})
export class RiLayoutHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
