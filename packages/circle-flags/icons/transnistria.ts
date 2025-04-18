import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTransnistriaIcon],svg[circle-flags-transnistria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTransnistria0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTransnistria0)"><svg:path fill="#a2001d" d="M0 0h512v189.5l-39 62l39 71.6V512H0V323l40.8-67L0 189.5z"></svg:path><svg:path fill="#6da544" d="M0 189.5h512v133.6H0z"></svg:path></svg:g>`,
})
export class CircleFlagsTransnistriaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
