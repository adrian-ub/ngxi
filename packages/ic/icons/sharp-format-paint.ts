import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFormatPaintIcon],svg[ic-sharp-format-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z"></svg:path>`,
})
export class IcSharpFormatPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
