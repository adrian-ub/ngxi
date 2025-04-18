import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFolderPlusIcon],svg[bx-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M20 5h-8.586L9.707 3.293A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 19V7h16l.002 12z"></svg:path>`,
})
export class BxFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
