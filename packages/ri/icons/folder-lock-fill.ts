import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderLockFillIcon],svg[ri-folder-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM15 13v-1a3 3 0 1 0-6 0v1H8v4h8v-4zm-2 0h-2v-1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class RiFolderLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
