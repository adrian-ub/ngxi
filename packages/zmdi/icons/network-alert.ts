import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkAlertIcon],svg[zmdi-network-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 344V173h43v171zm0 85v-42h43v42zM0 429L427 3v128h-86v298z"></svg:path>`,
})
export class ZmdiNetworkAlertIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
