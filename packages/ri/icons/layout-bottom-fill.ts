import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutBottomFillIcon],svg[ri-layout-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4zM21 3a1 1 0 0 1 1 1v10H2V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiLayoutBottomFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
