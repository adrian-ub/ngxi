import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSbIcon],svg[circle-flags-sb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSb0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSb0)"><svg:path fill="#496e2d" d="M512 512V23.6L256 255.9L23.6 512z"></svg:path><svg:path fill="#0052b4" d="M0 0h488.4L256 256L0 488.4z"></svg:path><svg:path fill="#ffda44" d="M488.4 0L0 488.4V512h23.6L512 23.6V0z"></svg:path><svg:path fill="#eee" d="m107.8 89l5.5 17h18l-14.6 10.5l5.5 17L108 123l-14.5 10.6l5.5-17L84.4 106h17.8zm91.3 0l5.5 17h18L208 116.4l5.6 17L199 123l-14.5 10.6l5.6-17l-14.5-10.6h18zm-91.3 89l5.5 17h18l-14.6 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17L84.4 195h17.8zm91.3 0l5.5 17h18L208 205.5l5.6 17l-14.5-10.5l-14.5 10.5l5.6-17l-14.5-10.5h18zm-45.7-44.5l5.6 17h17.8L162.4 161l5.5 17l-14.5-10.5L139 178l5.5-17l-14.5-10.5h18z"></svg:path></svg:g>`,
})
export class CircleFlagsSbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
