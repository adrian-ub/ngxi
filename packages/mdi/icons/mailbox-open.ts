import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxOpenIcon],svg[mdi-mailbox-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a5 5 0 0 0-5 5v9H1v2h20a2 2 0 0 0 2-2V9a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v9H5V9a3 3 0 0 1 3-3m6 5h6v4h-2v-2h-4z"></svg:path>`,
})
export class MdiMailboxOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
