import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLyIcon],svg[circle-flags-ly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLy0)"><svg:path fill="#333" d="m0 144.7l257-22.4l255 22.4v222.6l-254.9 31L0 367.3z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#496e2d" d="M0 367.3h512V512H0z"></svg:path><svg:g fill="#eee"><svg:path d="m315.6 209.3l21 29l34-11l-21 29l21 28.8l-34-11l-21 29v-36l-34-11l34-11z"></svg:path><svg:path d="M258.3 328.4a72.3 72.3 0 1 1 34.4-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.4 8.7"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsLyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
