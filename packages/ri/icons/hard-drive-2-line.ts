import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHardDrive2LineIcon],svg[ri-hard-drive-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14h14V4H5zm0 2v4h14v-4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 15h2v2h-2z"></svg:path>`,
})
export class RiHardDrive2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
