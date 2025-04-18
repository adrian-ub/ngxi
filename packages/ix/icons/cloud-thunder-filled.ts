import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudThunderFilledIcon],svg[ix-cloud-thunder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 191.999q0 1.344-.033 2.68c36.822 9.461 64.033 42.879 64.033 82.653c0 47.128-38.205 85.333-85.333 85.333h-39.114l34.708-42.666h-74.936l21.334-85.334h-119.48l-25.6 128H160c-64.801 0-117.333-52.532-117.333-117.333S95.199 127.999 160 127.999c16.646 0 32.482 3.466 46.826 9.716c18.575-31.358 52.752-52.383 91.841-52.383c58.91 0 106.666 47.756 106.666 106.667m-128 149.333l21.334-85.333H224l-21.333 106.666h42.666l-32.014 128l117.348-149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudThunderFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
