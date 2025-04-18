import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSkipFilledIcon],svg[ix-skip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128v256h-42.667V256.005L128 384V128l213.333 127.99V128z"></svg:path>`,
})
export class IxSkipFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
