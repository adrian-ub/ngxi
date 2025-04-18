import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenOutlineIcon],svg[mdi-mailbox-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h6v4h-2v-2h-4zm4-7H8a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5m-7 14H5V9a3 3 0 0 1 3-3a3 3 0 0 1 3 3zm10 0h-8V9c0-1.08-.35-2.14-1-3h6a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MdiMailboxOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
