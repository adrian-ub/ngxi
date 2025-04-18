import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsFolderOutlineAddIcon],svg[zondicons-folder-outline-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 2v10h16V6zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2z"></svg:path>`,
})
export class ZondiconsFolderOutlineAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
