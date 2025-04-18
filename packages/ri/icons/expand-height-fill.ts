import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHeightFillIcon],svg[ri-expand-height-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h12zm-1.05 7.45L12 4.5L7.053 9.447L11 9.448v5.102H7.05L12 19.5l4.95-4.95H13v-5.1zM18 20v2H6v-2z"></svg:path>`,
})
export class RiExpandHeightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
