import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutBottom2LineIcon],svg[ri-layout-bottom-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 10v2H6v-2z"></svg:path>`,
})
export class RiLayoutBottom2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
