import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInboxMultipleIcon],svg[mdi-inbox-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8V5H5v3h4a3 3 0 0 0 3 3a3 3 0 0 0 3-3zm0-5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 15h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MdiInboxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
