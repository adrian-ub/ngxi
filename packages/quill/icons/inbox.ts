import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillInboxIcon],svg[quill-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1.5 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16L9 5h14l4 11M5 16v3.5M27 16v3.5"></svg:path>`,
})
export class QuillInboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
