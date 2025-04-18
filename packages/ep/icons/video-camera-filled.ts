import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epVideoCameraFilledIcon],svg[ep-video-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m768 576l192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM192 768v64h384v-64zm192-480a160 160 0 0 1 320 0a160 160 0 0 1-320 0m64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288m-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320m64 0a64 64 0 1 0 128 0a64 64 0 0 0-128 0"></svg:path>`,
})
export class EpVideoCameraFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
