import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBzIcon],svg[circle-flags-bz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBz0)"><svg:path fill="#0052b4" d="m0 44.5l257.8-23.7L512 44.5v423l-252.5 26L0 467.5z"></svg:path><svg:circle cx="256" cy="256" r="122.4" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="100.2" fill="#6da544"></svg:circle><svg:circle cx="256" cy="256" r="66.8" fill="#eee"></svg:circle><svg:path fill="#0052b4" d="M256 239.3L219.8 256v27.8l36.2 22.3l36.2-22.3V256z"></svg:path><svg:path fill="#ffda44" d="M219.8 222.6h72.4V256h-72.4z"></svg:path><svg:path fill="#a2001d" d="M0 0h512v44.5H0zm0 467.5h512V512H0z"></svg:path></svg:g>`,
})
export class CircleFlagsBzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
