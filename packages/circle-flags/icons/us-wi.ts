import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsWiIcon],svg[circle-flags-us-wi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsWi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsWi0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M167 156v111c0 68 89 89 89 89s89-21 89-89V156Z"></svg:path><svg:path fill="#eee" d="M112 64h288v48H112Zm64 336h160v48H176Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsWiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
