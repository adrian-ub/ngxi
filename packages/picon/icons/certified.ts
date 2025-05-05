import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCertifiedIcon],svg[picon-certified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1v3h3V1m0 7L3.5 6L2 8V5L1 4V1l1-1h3l1 1v3L5 5"></svg:path>`,
})
export class PiconCertifiedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
