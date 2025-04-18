import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWidthNormalIcon],svg[ic-sharp-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z"></svg:path>`,
})
export class IcSharpWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
