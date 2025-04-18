import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTampermonkeyIcon],svg[whh-tampermonkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-448q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m512 0q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56"></svg:path>`,
})
export class WhhTampermonkeyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
