import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFolderIcon],svg[quill-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M28 11v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6c3 0 3 3 5 3h9.003C27.108 9 28 9.895 28 11Z"></svg:path>`,
})
export class QuillFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
