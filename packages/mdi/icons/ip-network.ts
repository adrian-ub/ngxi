import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIpNetworkIcon],svg[mdi-ip-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2V7h2zm7 11v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1zM9 5H7v10h2zm2 10h2v-4h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4z"></svg:path>`,
})
export class MdiIpNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
