import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderOpenFilledIcon],svg[tdesign-folder-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h10.48l2 2.5H23v2H12.52l-2-2.5H1zm0 4h8.48l2 2.5H23v12H1z"></svg:path>`,
})
export class TdesignFolderOpenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
