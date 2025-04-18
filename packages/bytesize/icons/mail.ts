import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeMailIcon],svg[bytesize-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 26h28V6H2ZM2 6l14 10L30 6"></svg:path>`,
})
export class BytesizeMailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
