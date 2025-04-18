import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderOffIcon],svg[tdesign-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.482 2.5l2 2.5H14v2h-3.48l-2-2.5H3v11.501l.003 1.412l-2 2L1 16.002V2.5zM21.414 4l-1 1H23v15H5.414L3 22.414L1.586 21L20 2.586zm-3 3l-11 11H21V7z"></svg:path>`,
})
export class TdesignFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
