import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKsIcon],svg[circle-flags-ks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKs0)"><svg:path fill="#ff9811" d="M0 0h224l32 88l-32 88l-96 32L0 176Z"></svg:path><svg:path fill="#eee" d="m0 224l256-32l256 32v48l-32 24l32 24v48l-32 24l32 24v48l-256 32L0 464v-48l32-24l-32-24v-48l32-24l-32-24Z"></svg:path><svg:path fill="#496e2d" d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"></svg:path><svg:circle cx="355.6" cy="110.2" r="80.5" fill="#eee"></svg:circle><svg:circle cx="376.2" cy="91.9" r="73.8" fill="#496e2d"></svg:circle><svg:path fill="#eee" d="m370 76l47-20l-27 44l-4-50l34 38z"></svg:path></svg:g>`,
})
export class CircleFlagsKsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
