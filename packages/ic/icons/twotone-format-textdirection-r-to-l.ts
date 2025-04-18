import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFormatTextdirectionRToLIcon],svg[ic-twotone-format-textdirection-r-to-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6m4 2c-1.1 0-2-.9-2-2s.9-2 2-2zM4 18l4 4v-3h12v-2H8v-3z"></svg:path>`,
})
export class IcTwotoneFormatTextdirectionRToLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
