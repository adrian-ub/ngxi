import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMpIcon],svg[ic-sharp-mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6zm9 6h-1.5V9H18v4.5h-3zm0-3h1.5v-1.5H15z"></svg:path>`,
})
export class IcSharpMpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
