import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkIcon],svg[zmdi-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 429L427 3v426z"></svg:path>`,
})
export class ZmdiNetworkIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
