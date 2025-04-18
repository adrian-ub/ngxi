import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEjectIcon],svg[ic-sharp-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></svg:path>`,
})
export class IcSharpEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
