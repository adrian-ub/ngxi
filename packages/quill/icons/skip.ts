import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSkipIcon],svg[quill-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 5v22M8 7.586v16.828c0 1.746 2.081 2.653 3.36 1.465l9.062-8.413a2 2 0 0 0 0-2.932L11.36 6.121C10.08 4.933 8 5.84 8 7.586"></svg:path>`,
})
export class QuillSkipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
