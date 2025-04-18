import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewListAltIcon],svg[zmdi-view-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213v-42h43v42zm0 86v-43h43v43zm0-171V85h43v43zm85 85v-42h299v42zm0 86v-43h299v43zm0-214h299v43H85z"></svg:path>`,
})
export class ZmdiViewListAltIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
