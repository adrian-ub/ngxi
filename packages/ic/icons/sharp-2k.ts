import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp2kIcon],svg[ic-sharp-2k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM8 12.5v1h3V15H6.5v-3.5h3v-1h-3V9H11v3.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp2kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
