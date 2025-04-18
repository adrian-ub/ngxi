import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhYenIcon],svg[whh-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M751 105L448 408v104h128q27 0 45.5 19t18.5 45.5t-18.5 45T576 640H448v64h128q27 0 45.5 19t18.5 45.5t-18.5 45T576 832H448v128q0 27-18.5 45.5t-45 18.5t-45-18.5T321 960V832H193q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128v-64H193q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128V408L18 105Q0 87 0 61.5T18 18T61.5 0T105 18l279 279L664 18q18-18 43.5-18T751 18t18 43.5t-18 43.5"></svg:path>`,
})
export class WhhYenIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
