import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHardwareIcon],svg[ic-twotone-hardware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1M11 13h2v6h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3zm-5 16h-2v-6h2zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4z"></svg:path>`,
})
export class IcTwotoneHardwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
