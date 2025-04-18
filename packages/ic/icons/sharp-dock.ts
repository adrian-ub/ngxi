import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDockIcon],svg[ic-sharp-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23h8v-2H8zM18 1.01L6 1v18h12zM16 15H8V5h8z"></svg:path>`,
})
export class IcSharpDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
