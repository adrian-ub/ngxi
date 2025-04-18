import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCsIcon],svg[circle-flags-cs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCs0)"><svg:path fill="#eee" d="M0 0h512v256l-265 45.2z"></svg:path><svg:path fill="#d80027" d="M210 256h302v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsCsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
