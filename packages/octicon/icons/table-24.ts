import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTable24Icon],svg[octicon-table-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25ZM9 9v11.5h11.25a.25.25 0 0 0 .25-.25V9Zm11.5-1.5V3.75a.25.25 0 0 0-.25-.25H9v4ZM3.5 9v11.25c0 .138.112.25.25.25H7.5V9Zm4-1.5v-4H3.75a.25.25 0 0 0-.25.25V7.5Z"></svg:path>`,
})
export class OcticonTable24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
