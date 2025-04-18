import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillEyeIcon],svg[quill-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z"></svg:path><svg:path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path></svg:g>`,
})
export class QuillEyeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
