import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutHorizontalLineIcon],svg[ri-layout-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 5h10V7H7zm10 4H7v-2h10zM7 17h10v-2H7z"></svg:path>`,
})
export class RiLayoutHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
