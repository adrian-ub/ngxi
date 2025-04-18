import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVcIcon],svg[circle-flags-vc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVc0)"><svg:path fill="#ffda44" d="M378.5 0H133.7l-22.3 256l22.3 256h244.8l22.3-256z"></svg:path><svg:path fill="#338af3" d="M133.7 512V0H0v512z"></svg:path><svg:path fill="#6da544" d="M512 0H378.5v512H512zM200.4 322.8L156 256l44.5-66.8l44.7 66.8zm111.4 0L267.1 256l44.6-66.8l44.5 66.8zm-55.7 89L211.6 345l44.5-66.7l44.5 66.7z"></svg:path></svg:g>`,
})
export class CircleFlagsVcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
