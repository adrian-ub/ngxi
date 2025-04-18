import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCheckmarkDoubleIcon],svg[quill-checkmark-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 17l5 5l12-12m-5 10l2 2l12-12"></svg:path>`,
})
export class QuillCheckmarkDoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
