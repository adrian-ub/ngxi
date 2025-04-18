import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFolderOpenIcon],svg[quill-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 26V8a2 2 0 0 1 2-2h6c3 0 3 3 5 3h7a2 2 0 0 1 2 2v2M4 26l3.783-12.294A1 1 0 0 1 8.739 13H26M4 26h19.523a2 2 0 0 0 1.911-1.412l3.168-10.294A1 1 0 0 0 27.646 13H26"></svg:path>`,
})
export class QuillFolderOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
