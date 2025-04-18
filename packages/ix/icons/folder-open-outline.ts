import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenOutlineIcon],svg[ix-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333V128H274.709L220.75 85.333H42.667v341.333h361.604l64.75-213.333zM85.334 338.773V128h120.583l53.958 42.666H384v42.667H124.688zM372.646 384H115.854l40.167-128h255.458z"></svg:path>`,
})
export class IxFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
