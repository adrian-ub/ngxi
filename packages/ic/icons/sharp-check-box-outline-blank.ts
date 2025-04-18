import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCheckBoxOutlineBlankIcon],svg[ic-sharp-check-box-outline-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14H5V5zm2-2H3v18h18z"></svg:path>`,
})
export class IcSharpCheckBoxOutlineBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
