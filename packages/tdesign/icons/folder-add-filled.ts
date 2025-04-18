import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderAddFilledIcon],svg[tdesign-folder-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v7.803A6 6 0 0 0 14.803 21H1z"></svg:path><svg:path fill="currentColor" d="M21 17v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class TdesignFolderAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
