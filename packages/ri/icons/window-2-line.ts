import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWindow2LineIcon],svg[ri-window-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-1 1v2h-4V6z"></svg:path>`,
})
export class RiWindow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
