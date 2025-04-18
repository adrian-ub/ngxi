import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsFmIcon],svg[circle-flags-fm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsFm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsFm0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m256 111.3l11 34h35.8l-29 21l11.1 34l-28.9-21l-29 21l11.1-34l-29-21H245zM111.3 256l34-11v-35.8l21 29l34-11.1l-21 28.9l21 29l-34-11.1l-21 29V267zM256 400.7l-11-34h-35.8l29-21l-11.1-34l28.9 21l29-21l-11.1 34l29 21H267zM400.7 256l-34 11v35.8l-21-29l-34 11.1l21-28.9l-21-29l34 11.1l21-29V245z"></svg:path></svg:g>`,
})
export class CircleFlagsFmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
