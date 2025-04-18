import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInboxFullIcon],svg[mdi-inbox-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V5H5v10h4c0 1.66 1.34 3 3 3s3-1.34 3-3zm0-12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 13v-2h10v2zm0-4V7h10v2z"></svg:path>`,
})
export class MdiInboxFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
