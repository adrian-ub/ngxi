import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutVerticalLineIcon],svg[ri-layout-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm12 3v10h2V7zm-4 0v10h2V7zM7 17V7h2v10z"></svg:path>`,
})
export class RiLayoutVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
