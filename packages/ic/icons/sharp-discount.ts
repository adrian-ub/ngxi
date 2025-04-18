import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDiscountIcon],svg[ic-sharp-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 21L3 11.21v2.83l9.79 9.79l9.04-9.04l-1.42-1.41z"></svg:path><svg:path fill="currentColor" d="m3 9.04l9.79 9.79l9.04-9.04L12.04 0H3zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path>`,
})
export class IcSharpDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
