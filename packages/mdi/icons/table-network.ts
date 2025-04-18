import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableNetworkIcon],svg[mdi-table-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2zM13 5h6v4h-6zm0 6h6v4h-6zM5 5h6v4H5zm0 10v-4h6v4z"></svg:path>`,
})
export class MdiTableNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
