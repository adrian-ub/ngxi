import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderMoveIcon],svg[tdesign-folder-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v16H1zm2 2V19h18V7H10.52l-2-2.5z"></svg:path><svg:path fill="currentColor" d="M8 11.999h4.657l-1.466-1.53l1.445-1.384l3.749 3.914l-3.75 3.914l-1.444-1.384L12.657 14H8z"></svg:path>`,
})
export class TdesignFolderMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
