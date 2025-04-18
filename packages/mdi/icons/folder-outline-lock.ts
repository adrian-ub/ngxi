import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderOutlineLockIcon],svg[mdi-folder-outline-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 17.998v-10H4v10h16zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2l.01-12c0-1.104.884-2 1.99-2h6l2 2h8zM9 16v-3h1v-1a2 2 0 1 1 4 0v1h1v3H9zm4-3v-1a1 1 0 1 0-2 0v1h2z" fill="currentColor"></svg:path>`,
})
export class MdiFolderOutlineLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
