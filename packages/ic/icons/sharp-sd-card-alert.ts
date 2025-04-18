import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSdCardAlertIcon],svg[ic-sharp-sd-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H10L4 8v14h16zm-7 15h-2v-2h2zm0-4h-2V8h2z"></svg:path>`,
})
export class IcSharpSdCardAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
