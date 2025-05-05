import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconIpphoneIcon],svg[picon-ipphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H3V0h5M7 3V1H4v2m0 1v1h3V4M4 6v1h3V6M0 8V2h2v6m3-1V4h1v3"></svg:path>`,
})
export class PiconIpphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
