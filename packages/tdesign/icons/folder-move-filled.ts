import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderMoveFilledIcon],svg[tdesign-folder-move-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.48 2.5H1V21h22V5H11.48zm3.177 9.499l-1.466-1.53l1.445-1.384l3.749 3.914l-3.75 3.914l-1.444-1.384L12.657 14H8v-2z"></svg:path>`,
})
export class TdesignFolderMoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
