import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFormatTextdirectionLToRIcon],svg[ic-twotone-format-textdirection-l-to-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2m12 14l-4-4v3H5v2h12v3z"></svg:path>`,
})
export class IcTwotoneFormatTextdirectionLToRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
