import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewListIcon],svg[zmdi-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 235v-86h85v86zm0 106v-85h85v85zm0-213V43h85v85zm107 107v-86h256v86zm0 106v-85h256v85zm0-298h256v85H107z"></svg:path>`,
})
export class ZmdiViewListIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
