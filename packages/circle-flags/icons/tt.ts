import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTtIcon],svg[circle-flags-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTt0)"><svg:path fill="#d80027" d="M0 110.2L110.2 0H512v401.8L401.8 512H0z"></svg:path><svg:path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z"></svg:path><svg:path fill="#333" d="M512 512v-63L63 0H0v63l449 449z"></svg:path></svg:g>`,
})
export class CircleFlagsTtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
