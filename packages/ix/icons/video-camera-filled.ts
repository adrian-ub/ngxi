import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraFilledIcon],svg[ix-video-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 106.667h-320v298.666h320v-93.482l106.666 53.334v-218.37l-106.666 53.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
