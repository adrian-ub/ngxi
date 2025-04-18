import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenUpIcon],svg[mdi-mailbox-open-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v9H5V9a3 3 0 0 1 3-3m5 7V7h4v2h-2v4z"></svg:path>`,
})
export class MdiMailboxOpenUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
