import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTwIcon],svg[circle-flags-tw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTw0)"><svg:path fill="#d80027" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#0052b4" d="M256 256V0H0v256z"></svg:path><svg:path fill="#eee" d="m222.6 149.8l-31.3 14.7l16.7 30.3l-34-6.5l-4.3 34.3l-23.6-25.2l-23.7 25.2l-4.3-34.3l-34 6.5l16.7-30.3l-31.2-14.7l31.2-14.7l-16.6-30.3l34 6.5l4.2-34.3l23.7 25.3L169.7 77l4.3 34.3l34-6.5l-16.7 30.3z"></svg:path><svg:circle cx="146.1" cy="149.8" r="47.7" fill="#0052b4"></svg:circle><svg:circle cx="146.1" cy="149.8" r="41.5" fill="#eee"></svg:circle></svg:g>`,
})
export class CircleFlagsTwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
