import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkOutlineIcon],svg[zmdi-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 106L103 387h281zM427 3v426H0z"></svg:path>`,
})
export class ZmdiNetworkOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
