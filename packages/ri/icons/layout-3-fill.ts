import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout3FillIcon],svg[ri-layout-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10v11H4a1 1 0 0 1-1-1V10zm13 0v10a1 1 0 0 1-1 1H10V10zm-1-7a1 1 0 0 1 1 1v4H3V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiLayout3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
