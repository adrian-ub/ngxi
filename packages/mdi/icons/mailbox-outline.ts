import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOutlineIcon],svg[mdi-mailbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7a5 5 0 0 0-5 5v11h18a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H4V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3zm-7-7v2h4v2h2v-4zm-4 0H5V9h4z"></svg:path>`,
})
export class MdiMailboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
