import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAzIcon],svg[circle-flags-us-az-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAz0)"><svg:path fill="#d80027" d="M71 0L0 34v91l16 35l-16 36v60l256 64l256-64v-60l-16-36l16-35V34L441 0h-85l-32 16l-32-16h-72l-32 16l-32-16Z"></svg:path><svg:path fill="#0052b4" d="M0 256h512v256H0Z"></svg:path><svg:path fill="#ffda44" d="m292 0l-36 256L356 0zm-36 256L512 34V0h-71zm0 0l256-60v-71zm0 0L0 125v71zm0 0L71 0H0v35zm0 0L220 0h-64z"></svg:path><svg:path fill="#ff9811" d="m256 128l83 256l-217-159h268L173 384Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
