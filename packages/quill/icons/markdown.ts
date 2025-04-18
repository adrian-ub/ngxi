import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillMarkdownIcon],svg[quill-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20v-8l-4 4l-4-4v8m12-3.5l3.5 3.5m0 0l3.5-3.5M22.5 20v-9M5 7h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class QuillMarkdownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
