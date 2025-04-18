import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutRight2FillIcon],svg[ri-layout-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-2 3h-2v12h2z"></svg:path>`,
})
export class RiLayoutRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
