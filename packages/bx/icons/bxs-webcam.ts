import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsWebcamIcon],svg[bx-bxs-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2c-4.963 0-9 4.037-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.963-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7s7 3.141 7 7s-3.141 7-7 7z" fill="currentColor"></svg:path><svg:path d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm-1.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 10.5 11z" fill="currentColor"></svg:path>`,
})
export class BxBxsWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
