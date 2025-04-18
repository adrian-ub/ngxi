import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMhIcon],svg[circle-flags-mh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMh0)"><svg:path fill="#0052b4" d="M0 0h397.6L512 114.2V512H0z"></svg:path><svg:path fill="#eee" d="M512 0H397.6L0 512L493.4 53.7z"></svg:path><svg:path fill="#ff9811" d="m0 512l512-397.8V0z"></svg:path><svg:path fill="#eee" d="M222.2 150.1L191 164.8l16.7 30.3l-34-6.5l-4.3 34.3l-23.6-25.2l-23.7 25.2l-4.3-34.3l-33.9 6.5l16.6-30.3l-31.2-14.7l31.2-14.7L84 105.1l34 6.5l4.2-34.3l23.7 25.3l23.6-25.3l4.3 34.3l34-6.5l-16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsMhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
