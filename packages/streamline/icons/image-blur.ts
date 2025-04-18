import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageBlurIcon],svg[streamline-image-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.542 2.896a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.917.25a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.917 8.708a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M2.771 5.667a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m8.458-2.666a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.77 3.021a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M5.5 5.792a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.5 8.708a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineImageBlurIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
