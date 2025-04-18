import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDropboxFillIcon],svg[ri-dropbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.285 10.668l5.215 3.323l-5.252 3.346L12 13.993l-5.248 3.344L1.5 13.99l5.215-3.323L1.5 7.346L6.752 4L12 7.343L17.248 4L22.5 7.346zm-.074 0L12 7.348l-5.211 3.32L12 13.988zM6.786 18.446l5.252-3.346l5.252 3.346l-5.252 3.346z"></svg:path>`,
})
export class RiDropboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
