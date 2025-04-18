import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeStartIcon],svg[bytesize-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v14L22 2v28L8 16v14"></svg:path>`,
})
export class BytesizeStartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
