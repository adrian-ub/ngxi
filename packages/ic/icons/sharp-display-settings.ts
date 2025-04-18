import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDisplaySettingsIcon],svg[ic-sharp-display-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z"></svg:path><svg:path fill="currentColor" d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"></svg:path>`,
})
export class IcSharpDisplaySettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
