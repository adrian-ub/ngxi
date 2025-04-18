import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeCaretTopIcon],svg[bytesize-caret-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30 22L16 6L2 22Z"></svg:path>`,
})
export class BytesizeCaretTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
