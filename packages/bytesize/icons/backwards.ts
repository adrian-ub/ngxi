import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeBackwardsIcon],svg[bytesize-backwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2L2 16l14 14V16l14 14V2L16 16Z"></svg:path>`,
})
export class BytesizeBackwardsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
