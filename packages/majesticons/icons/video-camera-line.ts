import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoCameraLineIcon],svg[majesticons-video-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.586l2.44-2.44c.944-.944 2.56-.275 2.56 1.061v7.586c0 1.336-1.616 2.006-2.56 1.06L17 14.415V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8zm15.414 4L20 14.586V9.414L17.414 12zM5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5z"></svg:path></svg:g>`,
})
export class MajesticonsVideoCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
