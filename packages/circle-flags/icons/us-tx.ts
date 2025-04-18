import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsTxIcon],svg[circle-flags-us-tx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsTx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsTx0)"><svg:path fill="#0052b4" d="M0 0h167l64 256l-64 256H0Z"></svg:path><svg:path fill="#eee" d="m43.5 317l104-75h-128l104 75l-40-122zM167 0h345v256l-173 64l-172-64Z"></svg:path><svg:path fill="#d80027" d="M167 256h345v256H167z"></svg:path></svg:g>`,
})
export class CircleFlagsUsTxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
