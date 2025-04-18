import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumSolidIcon],svg[streamline-ethereum-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.17.073a.5.5 0 0 1 .403.203L12.04 6.34L7.17 7.956L2.3 6.34L6.769.276A.5.5 0 0 1 7.17.073M2.289 7.652l4.48 6.082a.5.5 0 0 0 .805 0l4.48-6.082l-4.685 1.556a.63.63 0 0 1-.394 0L2.288 7.652Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEthereumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
