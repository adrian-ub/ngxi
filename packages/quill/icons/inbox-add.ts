import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillInboxAddIcon],svg[quill-inbox-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 27H8c-1.5 0-3-1.5-3-3v-8m0 0h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27L23 5H9zm20 12v-8m-4 4h8"></svg:path>`,
})
export class QuillInboxAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
