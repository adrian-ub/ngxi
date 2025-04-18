import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeFlagIcon],svg[bytesize-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v28M6 6h20l-6 6l6 6H6"></svg:path>`,
})
export class BytesizeFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
