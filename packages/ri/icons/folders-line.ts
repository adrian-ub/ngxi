import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFoldersLineIcon],svg[ri-folders-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 2H4v10h12v-2H6zm2-4v10h12V7h-5.414l-2-2z"></svg:path>`,
})
export class RiFoldersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
