import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAkIcon],svg[circle-flags-us-ak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAk0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m336.8 199.7l104-75.1h-128l104 75.1l-40-122.1zM57 231.7l52-37.4H45l52 37.4l-20-60.9zm85.5 31.7l52-37.4h-64l52 37.4l-20-60.9zM185 309l52-37.4h-64l52 37.4l-20-60.9zm43 47.6l52-37.4h-64l52 37.4l-20-60.9zm-5.6 67.1l52-37.4h-64l52 37.4l-20-60.9zM356 402.2l52-37.4h-64l52 37.4l-20-60.9zm-37.4 53.2l52-37.4h-64l52 37.4l-20-60.9z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
