import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsPaperPlaneIcon],svg[radix-icons-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.203 1.043a.5.5 0 0 0-.635.709L3.921 7.5L.568 13.248a.5.5 0 0 0 .635.709l13.5-6a.5.5 0 0 0 0-.914zM4.846 7.1L2.212 2.586L13.27 7.5L2.212 12.414L4.846 7.9H9a.4.4 0 1 0 0-.8z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsPaperPlaneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
