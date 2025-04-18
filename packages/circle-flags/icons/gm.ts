import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGmIcon],svg[circle-flags-gm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGm0)"><svg:path fill="#eee" d="m0 155.8l255-30.6l257 30.6v33.4l-27.7 67.2l27.7 66.4v33.4l-256 32.4L0 356.2v-33.4l28.8-68.5L0 189.2z"></svg:path><svg:path fill="#a2001d" d="M0 0h512v155.8H0z"></svg:path><svg:path fill="#0052b4" d="M0 189.2h512v133.6H0z"></svg:path><svg:path fill="#496e2d" d="M0 356.2h512V512H0z"></svg:path></svg:g>`,
})
export class CircleFlagsGmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
