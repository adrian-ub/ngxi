import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsNetworkDriveIcon],svg[grommet-icons-network-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 14v4M22 6v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM12 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4zM6 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"></svg:path>`,
})
export class GrommetIconsNetworkDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
