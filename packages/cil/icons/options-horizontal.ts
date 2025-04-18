import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilOptionsHorizontalIcon],svg[cil-options-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.25 12a3 3 0 1 0 3-3a3.004 3.004 0 0 0-3 3zm4.5 0a1.5 1.5 0 1 1-1.5-1.5a1.502 1.502 0 0 1 1.5 1.5z" fill="currentColor"></svg:path><svg:path d="M6.75 12a3 3 0 1 0-3 3a3.004 3.004 0 0 0 3-3zm-4.5 0a1.5 1.5 0 1 1 1.5 1.5a1.502 1.502 0 0 1-1.5-1.5z" fill="currentColor"></svg:path><svg:path d="M15 12a3 3 0 1 0-3 3a3.004 3.004 0 0 0 3-3zm-4.5 0a1.5 1.5 0 1 1 1.5 1.5a1.502 1.502 0 0 1-1.5-1.5z" fill="currentColor"></svg:path>`,
})
export class CilOptionsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
