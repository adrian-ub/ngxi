import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTextRotationDownIcon],svg[ic-twotone-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l3-3H7V4H5v13H3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1zm6.82 2.5L14 12.87V9.13z"></svg:path>`,
})
export class IcTwotoneTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
