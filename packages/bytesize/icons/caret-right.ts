import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeCaretRightIcon],svg[bytesize-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 30l16-14L10 2Z"></svg:path>`,
})
export class BytesizeCaretRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
