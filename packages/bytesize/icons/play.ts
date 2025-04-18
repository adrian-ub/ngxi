import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizePlayIcon],svg[bytesize-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v28l14-14Z"></svg:path>`,
})
export class BytesizePlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
