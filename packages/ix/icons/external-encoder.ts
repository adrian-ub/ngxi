import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixExternalEncoderIcon],svg[ix-external-encoder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 192.003H128v42.666H42.667zM469.333 85.336v256h-256v-256zm-170.666 42.667H256v170.666h42.667zm128 0H320v170.666h106.667zm-234.667 0v170.666h-42.667V128.003zm149.333 234.666h128v64h-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxExternalEncoderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
