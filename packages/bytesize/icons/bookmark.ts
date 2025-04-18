import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeBookmarkIcon],svg[bytesize-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2h20v28L16 20L6 30Z"></svg:path>`,
})
export class BytesizeBookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
