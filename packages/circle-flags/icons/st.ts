import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsStIcon],svg[circle-flags-st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSt0)"><svg:path fill="#6da544" d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"></svg:path><svg:path fill="#ffda44" d="M114.9 166.9H512v178H114.9z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path><svg:path fill="#333" d="m325 211.5l11.1 34H372l-29 21l11.1 34l-29-21l-28.9 21l11-34l-28.8-21H314zm111.4 0l11 34h35.8l-29 21l11.1 34l-29-21l-28.9 21l11.1-34l-29-21h35.8z"></svg:path></svg:g>`,
})
export class CircleFlagsStIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
