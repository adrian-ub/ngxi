import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCodeOutlineIcon],svg[mdi-file-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-8.46-4.35l2.09 2.09L10.35 19L7 15.65l3.35-3.35l1.28 1.26zm7.46 0L13.65 19l-1.27-1.26l2.09-2.09l-2.09-2.09l1.27-1.26z"></svg:path>`,
})
export class MdiFileCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
