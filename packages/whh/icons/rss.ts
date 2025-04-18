import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRssIcon],svg[whh-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68q0-150-58.5-286t-157-234.5t-234.5-157t-286-58.5q-40 0-68-28t-28-68t28-68t68-28q126 0 246.5 33.5t222 93t187.5 145.5t145.5 187.5t93 222t33.5 246.5q0 40-28 68t-68 28m-832-640q111 0 211.5 43t173.5 116t116 173.5t43 211.5q0 40-28 68t-68 28t-68-28t-28-68q0-151-100.5-251.5T96.784 576q-40 0-68-28t-28-68t28-68t68-28m32 384q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5T.784 896t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhRssIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
