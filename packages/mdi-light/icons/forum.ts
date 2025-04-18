import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightForumIcon],svg[mdi-light-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.59L5.59 13H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM2 18H1V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6zm19 2.59V10a2 2 0 0 0-2-2V7a3 3 0 0 1 3 3v12h-1l-4-4H8c-1.24 0-2.3-.75-2.76-1.82l.8-.8C6.21 16.3 7 17 8 17h9.41z"></svg:path>`,
})
export class MdiLightForumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
