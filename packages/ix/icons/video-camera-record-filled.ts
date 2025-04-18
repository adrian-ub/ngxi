import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraRecordFilledIcon],svg[ix-video-camera-record-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 106.667h320v93.481l106.666-53.333v218.37l-106.666-53.334v93.482h-320zm224 234.666c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraRecordFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
