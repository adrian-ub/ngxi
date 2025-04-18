import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCallToActionIcon],svg[ic-sharp-call-to-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16H3v-3h18z"></svg:path>`,
})
export class IcSharpCallToActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
