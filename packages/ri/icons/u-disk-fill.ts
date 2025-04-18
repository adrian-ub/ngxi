import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUDiskFillIcon],svg[ri-u-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1M5 2h14v8H5zm4 3v2h2V5zm4 0v2h2V5z"></svg:path>`,
})
export class RiUDiskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
