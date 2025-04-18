import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillDownloadIcon],svg[quill-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 22V5M9 16l7 7l7-7M9 27h14"></svg:path>`,
})
export class QuillDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
