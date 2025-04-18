import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeArrowBottomIcon],svg[bytesize-arrow-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 22l10 8l10-8m-10 8V2"></svg:path>`,
})
export class BytesizeArrowBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
