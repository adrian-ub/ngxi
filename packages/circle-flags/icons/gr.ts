import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGrIcon],svg[circle-flags-gr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGr0)"><svg:path fill="#0052b4" d="M0 0h99l29 32l28-32h356v57l-32 28l32 29v57l-32 28l32 29v57l-32 28l32 28v57l-32 29l32 28v57H0v-57l32-28l-32-29v-56l32-29l-32-28V171l32-29l-32-28Z"></svg:path><svg:path fill="#eee" d="M99 0v114H0v57h99v114H0v57h512v-57H156V171h100v-57H156V0Zm157 57v57h256V57Zm0 114v57h256v-57ZM0 398v57h512v-57z"></svg:path></svg:g>`,
})
export class CircleFlagsGrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
