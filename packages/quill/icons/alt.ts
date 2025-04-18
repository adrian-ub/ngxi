import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillAltIcon],svg[quill-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 9h5.485a1 1 0 0 1 .814.419l9.402 13.162a1 1 0 0 0 .814.419H27M21 9h6"></svg:path>`,
})
export class QuillAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
