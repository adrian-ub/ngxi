import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpIntegrationInstructionsIcon],svg[ic-sharp-integration-instructions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zM11 14.17l-1.41 1.42L6 12l3.59-3.59L11 9.83L8.83 12zm1-9.92c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75m2.41 11.34L13 14.17L15.17 12L13 9.83l1.41-1.42L18 12z"></svg:path>`,
})
export class IcSharpIntegrationInstructionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
