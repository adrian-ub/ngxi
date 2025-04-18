import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileMarkedLineIcon],svg[ri-file-marked-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 4H5v16h14V4h-5v9l-3.5-2L7 13z"></svg:path>`,
})
export class RiFileMarkedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
