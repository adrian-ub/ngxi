import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkOffIcon],svg[zmdi-network-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 5v367L243 189zM80 80l368 368l-27 27l-43-43H0l189-189L53 107z"></svg:path>`,
})
export class ZmdiNetworkOffIcon {
  readonly viewBox = input("0 0 448 480")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
