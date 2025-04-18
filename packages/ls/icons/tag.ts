import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTagIcon],svg[ls-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h267l379 379c44 44 0 89 0 89S512 603 468 648c-45 44-89 0-89 0L0 269zm183 183c22-23 22-57 0-79s-57-22-79 0s-22 57 0 79s57 22 79 0"></svg:path>`,
})
export class LsTagIcon {
  readonly viewBox = input("0 0 666 668")
  readonly width = input("1em")
  readonly height = input("1em")
}
