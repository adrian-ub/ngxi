import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMoveOutlineIcon],svg[mdi-folder-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V8h16zM12 6l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8a2 2 0 0 0-2-2zm-1 8v-2h4V9l4 4l-4 4v-3z"></svg:path>`,
})
export class MdiFolderMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
