import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFlipIcon],svg[ic-twotone-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5zm10-2v2h2c0-1.1-.9-2-2-2m-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"></svg:path>`,
})
export class IcTwotoneFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
