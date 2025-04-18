import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVuIcon],svg[circle-flags-vu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVu0)"><svg:path fill="#d80027" d="M512 222.6V0H0l215.6 239.4z"></svg:path><svg:path fill="#6da544" d="M512 289.4V512H0l216.5-240z"></svg:path><svg:path fill="#333" d="m0 0l222.6 222.6H512v22.2l-10.9 11.8L512 267v22.4H222.6L0 512v-31.5l8-23l-8-8.6V63l9.5-10.4l-9.5-21z"></svg:path><svg:g fill="#ffda44"><svg:path d="M512 244.8H213.2L0 31.7V63l192.8 193L0 449v31.5L213.2 267H512z"></svg:path><svg:path d="M62.2 310.6V289a38.8 38.8 0 0 0 38.8-38.8A27.5 27.5 0 0 0 73.5 223a18.7 18.7 0 0 0-18.7 18.7a12 12 0 0 0 12 12c3.7 0 6.8-3 6.8-6.8H95A28.2 28.2 0 0 1 66.8 275c-18.4 0-33.4-15-33.4-33.4c0-22.2 18-40.2 40-40.2a49 49 0 0 1 49 49c0 33.1-27 60.2-60.2 60.2"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsVuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
