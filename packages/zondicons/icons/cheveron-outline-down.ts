import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronOutlineDownIcon],svg[zondicons-cheveron-outline-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10a10 10 0 1 1-20 0a10 10 0 0 1 20 0M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9L10 13.24z"></svg:path>`,
})
export class ZondiconsCheveronOutlineDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
