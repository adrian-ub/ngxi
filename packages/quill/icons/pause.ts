import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillPauseIcon],svg[quill-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 7v18m9-18v18"></svg:path>`,
})
export class QuillPauseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
