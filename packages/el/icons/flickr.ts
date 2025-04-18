import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFlickrIcon],svg[el-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1200h1200V0zm354.932 373.828c124.93 0 226.172 101.242 226.172 226.172S479.861 826.245 354.932 826.245S128.76 724.93 128.76 600s101.242-226.172 226.172-226.172m490.136 0c124.93 0 226.172 101.242 226.172 226.172S969.998 826.245 845.068 826.245S618.896 724.93 618.896 600s101.243-226.172 226.172-226.172"></svg:path>`,
})
export class ElFlickrIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
