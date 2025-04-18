import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAqIcon],svg[circle-flags-aq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAq0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAq0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m135 343l-41-70l17-38l-40-51l-9-37l74 51l45-11l19-67l50-29l75 11l87 45l4 74l28 10v76l-53 94l-64 20l-59-14l15-25l-7-26l-8 7z"></svg:path></svg:g>`,
})
export class CircleFlagsAqIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
