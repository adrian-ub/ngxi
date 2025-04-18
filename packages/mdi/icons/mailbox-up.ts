import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailboxUpIcon],svg[mdi-mailbox-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h4v2H5zm17 0v9a2 2 0 0 1-2 2H2V9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5M10 9a3 3 0 0 0-3-3a3 3 0 0 0-3 3v9h6zm6-2h-4v6h2V9h2z"></svg:path>`,
})
export class MdiMailboxUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
