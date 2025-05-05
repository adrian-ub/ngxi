import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCctvIcon],svg[picon-cctv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 1l7-1v3m0 2v1H5V3h1v2M0 4V2h1v2"></svg:path>`,
})
export class PiconCctvIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
