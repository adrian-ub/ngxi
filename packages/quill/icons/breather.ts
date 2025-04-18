import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillBreatherIcon],svg[quill-breather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25.192 25.192A13 13 0 1 0 6.808 6.808a13 13 0 0 0 18.384 18.384"></svg:path>`,
})
export class QuillBreatherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
