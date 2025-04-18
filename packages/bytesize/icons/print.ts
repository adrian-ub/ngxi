import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizePrintIcon],svg[bytesize-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 25H2V9h28v16h-5M7 19v11h18V19ZM25 9V2H7v7m15 5h3"></svg:path>`,
})
export class BytesizePrintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
