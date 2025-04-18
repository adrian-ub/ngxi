import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsEndpointsConnectedIcon],svg[eos-icons-endpoints-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.02 13.01v-2h-4.01v-5h1v-4h-4v4h1v5h-12v2H7V18H6v4h3.99v-4h-1v-4.99z"></svg:path>`,
})
export class EosIconsEndpointsConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
