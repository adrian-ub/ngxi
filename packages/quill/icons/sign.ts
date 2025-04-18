import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSignIcon],svg[quill-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 25h-5L7 15c2-.667 6-4 6-12h6c0 7.6 4 11.167 6 12l-4 10zm0 0v-6m0-6V3M9 25h14v4H9zm9-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class QuillSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
