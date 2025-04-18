import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGyIcon],svg[circle-flags-gy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGy0)"><svg:path fill="#6da544" d="M77.7 0H512v512H77.8z"></svg:path><svg:path fill="#eee" d="M425.4 254.7L31.4 512h46.4L512 256L77.7 0H31.4z"></svg:path><svg:path fill="#ffda44" d="M256 256L31.4 512l436.8-256L31.4 0z"></svg:path><svg:path fill="#333" d="M0 0v1.8l219.6 253.8L0 510v2h31.4l256-256L31.4 0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsGyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
