import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsTnIcon],svg[circle-flags-us-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsTn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsTn0)"><svg:path fill="#0052b4" d="M448 0h64v512h-64l-16-256Z"></svg:path><svg:path fill="#eee" d="M416 0h32v512h-32l-16-256Z"></svg:path><svg:path fill="#d80027" d="M0 0h416v512H0z"></svg:path><svg:circle cx="208" cy="256" r="160" fill="#eee"></svg:circle><svg:circle cx="208" cy="256" r="128" fill="#0052b4"></svg:circle><svg:path fill="#eee" d="m145 284l60 83V265l-60 83l98-32zm15-128l-22 100l76-68l-102 11l89 51zm147 49l-42 93l-21-100l75 69l-102-11z"></svg:path></svg:g>`,
})
export class CircleFlagsUsTnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
