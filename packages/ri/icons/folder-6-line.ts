import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolder6LineIcon],svg[ri-folder-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3c-.55 0-1-.45-1-1zm8.586 2l-1-1H4v2h5.586zM4 9v10h16V7h-7.586l-2 2z"></svg:path>`,
})
export class RiFolder6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
