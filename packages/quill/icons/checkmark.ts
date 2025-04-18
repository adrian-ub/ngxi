import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCheckmarkIcon],svg[quill-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.5 17l6 6l13-13"></svg:path>`,
})
export class QuillCheckmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
