import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSamiIcon],svg[circle-flags-sami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSami0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSami0)"><svg:path fill="#ffda44" d="M199 0h32l32 256l-32 256h-32l-32-256Z"></svg:path><svg:path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z"></svg:path><svg:path fill="#0052b4" d="M231 0h281v512H231Z"></svg:path><svg:path fill="#d80027" d="M0 0h167v512H0Zm199 132l-32 16l32 16a92 92 0 1 1 0 184l-32 16l32 16a124 124 0 0 0 0-248"></svg:path><svg:path fill="#0052b4" d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"></svg:path></svg:g>`,
})
export class CircleFlagsSamiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
