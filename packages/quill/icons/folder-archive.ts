import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFolderArchiveIcon],svg[quill-folder-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11h20m-14 5h8M5 7v4h2v14.002C7 26.106 7.895 27 9 27h14c1.105 0 2-.894 2-1.998V11h2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2"></svg:path>`,
})
export class QuillFolderArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
