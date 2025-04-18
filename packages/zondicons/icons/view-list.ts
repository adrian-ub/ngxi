import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsViewListIcon],svg[zondicons-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h20v2H0zm0 4h20v2H0zm0 4h20v2H0zm0 4h20v2H0z"></svg:path>`,
})
export class ZondiconsViewListIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
