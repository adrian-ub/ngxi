import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixThumbUpFilledIcon],svg[ix-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.436 469.333c-6.497 0-13.445-.438-20.886-1.396L64 426.664v-192.01l92.949-52.098S231.661 42.88 231.668 42.88c51.203-2.7 87.16 19.894 70.979 82.929c-4.9 19.087-11.408 44.842-11.408 44.842h73.793c25.84 0 48.335 10.075 63.368 27.253c16.447 18.803 22.859 44.992 18.034 73.754l-.043.146c-4.503 25.73-16.576 93.107-31.115 130.421c-7.463 19.105-26.183 67.108-93.84 67.108"></svg:path>`,
})
export class IxThumbUpFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
