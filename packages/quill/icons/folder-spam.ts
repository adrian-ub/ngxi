import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFolderSpamIcon],svg[quill-folder-spam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.5c1.5 0 5.5 0 5.5 7M11 5c4 0 8.5 2.8 8.5 6c0 5-9.5 3-9.5 8c0 5.5 17-5 17 4c0 4-8.5 4-13 4c-12 0-11-10.5-3-10.5C15.4 12.1 12.5 7 11 5"></svg:path>`,
})
export class QuillFolderSpamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
