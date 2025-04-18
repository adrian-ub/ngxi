import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeWifiFillIcon],svg[ri-home-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM7 11v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m0 4v3h3a3 3 0 0 0-3-3"></svg:path>`,
})
export class RiHomeWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
