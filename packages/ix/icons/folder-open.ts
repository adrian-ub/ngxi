import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenIcon],svg[ix-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333V128H274.709L220.75 85.333H42.667v341.333H415.25L480 213.333zM85.334 338.773V128h120.583l53.958 42.666H384v42.667H124.688zM383.625 384h-267.77l40.166-128h266.437z"></svg:path>`,
})
export class IxFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
