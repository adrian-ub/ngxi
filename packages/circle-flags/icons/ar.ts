import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsArIcon],svg[circle-flags-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAr0)"><svg:path fill="#338af3" d="M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256L0 144.7z"></svg:path><svg:path fill="#eee" d="M0 144.7h512v222.6H0z"></svg:path><svg:path fill="#ffda44" d="m332.4 256l-31.2 14.7l16.7 30.3l-34-6.5l-4.2 34.3l-23.7-25.2l-23.6 25.2l-4.3-34.3l-34 6.5l16.6-30.3l-31.2-14.7l31.3-14.7L194 211l34 6.5l4.3-34.3l23.6 25.2l23.6-25.2l4.4 34.3l34-6.5l-16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsArIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
