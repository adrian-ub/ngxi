import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMarkAsUnreadIcon],svg[ic-round-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L11.4 2.45c-.56-.29-1.23-.29-1.8-.01L2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4z"></svg:path><svg:path fill="currentColor" d="M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 3.46c0 .33-.19.64-.48.79l-5.61 2.88a.89.89 0 0 1-.81 0l-5.61-2.88a.887.887 0 1 1 .81-1.58l5.2 2.67l5.2-2.67c.6-.31 1.3.12 1.3.79"></svg:path>`,
})
export class IcRoundMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
