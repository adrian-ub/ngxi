import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlayStepwiseFilledIcon],svg[ix-play-stepwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.334 128l213.333 128l-213.333 128zm-64 85.333C108.898 213.333 128 232.436 128 256s-19.102 42.667-42.666 42.667S42.667 279.564 42.667 256s19.103-42.667 42.667-42.667m341.333 0c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667S384 279.564 384 256s19.103-42.667 42.667-42.667"></svg:path>`,
})
export class IxPlayStepwiseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
