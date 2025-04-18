import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOtomiIcon],svg[circle-flags-otomi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOtomi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOtomi0)"><svg:path fill="#ff9811" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#eee" d="m0 160l256-32l256 32v32H0Z"></svg:path><svg:path fill="#338af3" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#eee" d="m0 352l256 32l256-32v-32H0Z"></svg:path><svg:path fill="#6da544" d="M0 352h512v160H0Z"></svg:path><svg:circle cx="256" cy="256" r="160" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="128" fill="#338af3"></svg:circle><svg:path fill="#ff9811" d="M207 139v68h-68l49 49l-49 49h68v68l49-49l49 49v-68h68l-49-49l49-49h-68v-68l-49 49z"></svg:path></svg:g>`,
})
export class CircleFlagsOtomiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
