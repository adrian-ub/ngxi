import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarIcon],svg[mdi-file-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm.5 16.9L12 17.5L9.5 19l.7-2.8L8 14.3l2.9-.2l1.1-2.7l1.1 2.6l2.9.2l-2.2 1.9zM13 9V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
