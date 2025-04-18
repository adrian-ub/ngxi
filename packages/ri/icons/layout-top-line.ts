import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutTopLineIcon],svg[ri-layout-top-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 10v9h16v-9zm0-2h16V5H4z"></svg:path>`,
})
export class RiLayoutTopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
