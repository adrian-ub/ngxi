import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout5LineIcon],svg[ri-layout-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm4-11H4v9h3zm13 0H9v9h11zm0-5H4v3h16z"></svg:path>`,
})
export class RiLayout5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
