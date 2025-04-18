import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTzIcon],svg[circle-flags-tz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTz0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M399 0L167 167L0 399v45l68 68h45l232-167l167-232V68L444 0Z"></svg:path><svg:path fill="#333" d="M444 0L0 444v68h68L512 68V0Z"></svg:path><svg:path fill="#338af3" d="m113 512l399-399v399z"></svg:path><svg:path fill="#6da544" d="M0 399V0h399Z"></svg:path></svg:g>`,
})
export class CircleFlagsTzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
