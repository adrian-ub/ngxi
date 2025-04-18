import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDangerousZoneSignIcon],svg[streamline-dangerous-zone-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.89 1.05a1 1 0 0 0-1.78 0l-5.5 11a1 1 0 0 0 .89 1.45h11a1 1 0 0 0 .89-1.45z"></svg:path><svg:path d="m6.696 10.969l2.022-2.767H5.281l2.022-2.766"></svg:path></svg:g>`,
})
export class StreamlineDangerousZoneSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
