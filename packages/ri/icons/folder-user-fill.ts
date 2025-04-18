import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderUserFillIcon],svg[ri-folder-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM12 13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-4 5h8a4 4 0 0 0-8 0"></svg:path>`,
})
export class RiFolderUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
