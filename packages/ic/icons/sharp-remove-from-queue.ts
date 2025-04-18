import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRemoveFromQueueIcon],svg[ic-sharp-remove-from-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2H8v-2z"></svg:path>`,
})
export class IcSharpRemoveFromQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
