import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneGridViewIcon],svg[ic-twotone-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 21h8v-8H3zm2-6h4v4H5zm-2-4h8V3H3zm2-6h4v4H5zm8 16h8v-8h-8zm2-6h4v4h-4zM13 3v8h8V3zm6 6h-4V5h4z"></svg:path>`,
})
export class IcTwotoneGridViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
