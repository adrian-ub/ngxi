import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSmartDisplayIcon],svg[ic-sharp-smart-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h20zM9.5 16.5v-9l7 4.5z"></svg:path>`,
})
export class IcSharpSmartDisplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
