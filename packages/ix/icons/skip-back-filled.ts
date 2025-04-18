import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSkipBackFilledIcon],svg[ix-skip-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128v256h42.667V256.005L384 384V128L170.667 255.99V128z"></svg:path>`,
})
export class IxSkipBackFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
