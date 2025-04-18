import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSlashForwardBoxIcon],svg[mdi-slash-forward-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.3 19H7l7.7-14H17z"></svg:path>`,
})
export class MdiSlashForwardBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
