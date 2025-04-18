import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDiscussFillIcon],svg[ri-discuss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.8 19L14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiDiscussFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
