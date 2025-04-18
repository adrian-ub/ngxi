import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillToDoIcon],svg[quill-to-do-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0"></svg:path>`,
})
export class QuillToDoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
