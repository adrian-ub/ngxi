import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCaQcIcon],svg[circle-flags-ca-qc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCaQc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCaQc0)"><svg:path fill="#0052b4" d="M0 0h224l32 32l32-32h224v224l-32 32l32 32v224H288l-32-32l-32 32H0V288l32-32l-32-32Z"></svg:path><svg:path fill="#eee" d="M224 0v224H0v64h224v224h64V288h224v-64H288V0zm-96 96v32H96v32h32v32h32v-32h32v-32h-32V96zm224 0v32h-32v32h32v32h32v-32h32v-32h-32V96zM128 320v32H96v32h32v32h32v-32h32v-32h-32v-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32v-32z"></svg:path></svg:g>`,
})
export class CircleFlagsCaQcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
