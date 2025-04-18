import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout6LineIcon],svg[ri-layout-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm12-11H4v9h11zm5 0h-3v9h3zm0-5H4v3h16z"></svg:path>`,
})
export class RiLayout6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
