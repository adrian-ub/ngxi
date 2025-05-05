import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNetworkIcon],svg[picon-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h4v3M0 8V6h3v2m2 0V6h3v2M0 4v1h8V4M1 4v3h1V4m4 0v3h1V4M3 1v3h2V1"></svg:path>`,
})
export class PiconNetworkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
