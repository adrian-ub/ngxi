import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkBookmarkActiveIcon],svg[nrk-bookmark-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.894 23.647L5 22.271V1h14v21.275l-1.892 1.374L12 20zM7 5h10V3H7z"></svg:path>`,
})
export class NrkBookmarkActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
