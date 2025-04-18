import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenu4FillIcon],svg[ri-menu-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"></svg:path>`,
})
export class RiMenu4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
