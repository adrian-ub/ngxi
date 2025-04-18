import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenUpOutlineIcon],svg[mdi-mailbox-open-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12.85v-6h4v2h-2v4zm4-9H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2v-9a5 5 0 0 0-5-5m-7 14H5v-9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8v-9c0-1.09-.35-2.14-1-3h6a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MdiMailboxOpenUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
