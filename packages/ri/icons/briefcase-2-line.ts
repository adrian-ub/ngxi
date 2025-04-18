import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBriefcase2LineIcon],svg[ri-briefcase-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm13 8H4v6h16zm0-6H4v4h3V9h2v2h6V9h2v2h3zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
