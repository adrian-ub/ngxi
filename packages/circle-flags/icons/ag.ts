import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAgIcon],svg[circle-flags-ag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAg0)"><svg:path fill="#333" d="M0 .4h512l-34 229H36z"></svg:path><svg:path fill="#ffda44" d="m367.3 205.3l-109.7 19.4l-112.9-19.4l45.5-21.3l-24.2-44l49.3 9.4l6.3-49.9l34.4 36.7l34.4-36.6l6.3 50L346 140l-24.2 44z"></svg:path><svg:path fill="#0052b4" d="M25.6 205.3h466.8L257 439.5z"></svg:path><svg:path fill="#eee" d="M34 307.4h446L256 511.6z"></svg:path><svg:path fill="#a2001d" d="m0 511.6l256 .4L0 .4zm256 .4l256-.4V0z"></svg:path></svg:g>`,
})
export class CircleFlagsAgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
