import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayoutFillIcon],svg[ri-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21V10h5v10a1 1 0 0 1-1 1zm-2 0H4a1 1 0 0 1-1-1V10h11zm7-13H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiLayoutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
