import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGobletLineIcon],svg[ri-goblet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2zM7.49 7h9.02l1.8-2H5.69zm1.8 2L12 12.01L14.71 9z"></svg:path>`,
})
export class RiGobletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
