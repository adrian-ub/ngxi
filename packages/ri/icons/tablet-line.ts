import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTabletLineIcon],svg[ri-tablet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V4zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiTabletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
