import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHeightLineIcon],svg[ri-expand-height-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2H6zm10.95 7.45L12 4.5L7.053 9.447l1.414 1.415L11 8.328v7.343l-2.535-2.535l-1.414 1.414L12 19.5l4.95-4.95l-1.414-1.414L13 15.672V8.328l2.536 2.536zM18 20v2H6v-2z"></svg:path>`,
})
export class RiExpandHeightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
