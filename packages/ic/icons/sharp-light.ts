import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLightIcon],svg[ic-sharp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.06V3h-2v3.06A9.006 9.006 0 0 0 3.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.006 9.006 0 0 0 13 6.06M12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7z"></svg:path>`,
})
export class IcSharpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
