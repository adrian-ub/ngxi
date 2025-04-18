import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsNmIcon],svg[circle-flags-us-nm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsNm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsNm0)"><svg:path fill="#ffda44" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#d80027" d="M256 56c-7 0-12 5-12 12v128h-24v-92a12 12 0 0 0-24 0v92h-92a12 12 0 0 0 0 24h92v24H68a12 12 0 0 0 0 24h128v24h-92a12 12 0 0 0 0 24h92v92c0 7 5 12 12 12s12-5 12-12v-92h24v128c0 7 5 12 12 12s12-5 12-12V316h24v92c0 7 5 12 12 12s12-5 12-12v-92h92c7 0 12-5 12-12s-5-12-12-12h-92v-24h128c7 0 12-5 12-12s-5-12-12-12H316v-24h92c7 0 12-5 12-12s-5-12-12-12h-92v-92a12 12 0 0 0-24 0v92h-24V68c0-7-5-12-12-12"></svg:path><svg:circle cx="256" cy="256" r="88" fill="#d80027"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsUsNmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
