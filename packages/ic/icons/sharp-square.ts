import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSquareIcon],svg[ic-sharp-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3z"></svg:path>`,
})
export class IcSharpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
