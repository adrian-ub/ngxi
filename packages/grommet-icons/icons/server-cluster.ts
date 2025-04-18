import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsServerClusterIcon],svg[grommet-icons-server-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 8h22V1H1zm10-3h1V4h-1zm8 0h1V4h-1zm-4 0h1V4h-1zm-4 7h1v-1h-1zm8 0h1v-1h-1zm-4 0h1v-1h-1zm-4 7h1v-1h-1zm8 0h1v-1h-1zm-4 0h1v-1h-1zM1 15h22V8H1zm0 7h22v-7H1zm20 1H3"></svg:path>`,
})
export class GrommetIconsServerClusterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
