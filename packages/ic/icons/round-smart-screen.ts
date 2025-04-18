import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSmartScreenIcon],svg[ic-round-smart-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 2v10H6V7zm-4 5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75S9 12.41 9 12m7.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75"></svg:path>`,
})
export class IcRoundSmartScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
