import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRemoveEyeFilledIcon],svg[ix-remove-eye-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333C405.334 85.333 469.334 256 469.334 256s-21.838 58.234-69.765 106.668l-100.902-.002l.002 59.127c-13.367 3.131-27.582 4.873-42.669 4.873C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333M490.667 384v42.666H320V384zM256 181.333c-41.237 0-74.666 33.43-74.666 74.667s33.43 74.666 74.666 74.666c41.238 0 74.667-33.43 74.667-74.666c0-41.238-33.43-74.667-74.667-74.667M256 224c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxRemoveEyeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
