import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillFolderDraftsIcon],svg[quill-folder-drafts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h8m-8 4h22M5 16h6m-6 4h12m-3-4h13m-6 4h6M5 24h2m4 0h4"></svg:path>`,
})
export class QuillFolderDraftsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
