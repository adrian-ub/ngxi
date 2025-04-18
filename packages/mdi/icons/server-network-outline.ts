import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiServerNetworkOutlineIcon],svg[mdi-server-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H3.2c-.7 0-1.2-.7-1.2-1.6V6.6C2 5.7 2.5 5 3.2 5h17.6c.7 0 1.2.7 1.2 1.6v4.8c0 .9-.5 1.6-1.2 1.6zm-4-3V8h1v2zM5 8h2v2H5zm15-1H4v4h16z"></svg:path>`,
})
export class MdiServerNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
