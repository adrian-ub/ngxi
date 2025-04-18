import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarOutlineIcon],svg[mdi-file-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zm-8.5-2l.7-2.8L8 13.3l2.9-.2l1.1-2.7l1.1 2.6l2.9.2l-2.2 1.9l.7 2.8l-2.5-1.4z"></svg:path>`,
})
export class MdiFileStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
