import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faVideoCameraIcon],svg[fa-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 96v1088q0 42-39 59q-13 5-25 5q-27 0-45-19l-403-403v166q0 119-84.5 203.5T992 1280H288q-119 0-203.5-84.5T0 992V288Q0 169 84.5 84.5T288 0h704q119 0 203.5 84.5T1280 288v165l403-402q18-19 45-19q12 0 25 5q39 17 39 59"></svg:path>`,
})
export class FaVideoCameraIcon {
  readonly viewBox = input("0 0 1792 1280")
  readonly width = input("1.4em")
  readonly height = input("1em")
}
