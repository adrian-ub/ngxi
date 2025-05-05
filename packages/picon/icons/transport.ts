import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTransportIcon],svg[picon-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6h8V1M5 6V3l2 1.5M1 6V2h6v4"></svg:path>`,
})
export class PiconTransportIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
