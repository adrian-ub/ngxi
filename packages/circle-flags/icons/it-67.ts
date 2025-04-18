import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt67Icon],svg[circle-flags-it-67-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt670" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt670)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#d80027" d="M344 152H144v141c0 18 5 33.3 12.7 46.3l30.9 33.1c31.4 23.5 68.4 32 68.4 32S368 378.7 368 293V192z"></svg:path><svg:path fill="#eee" fill-rule="evenodd" d="m202.4 210.3l-14.2-4.7l-6.7 13.4l-6.7-13.4l-14.2 4.7l4.8-14.2l-13.4-6.6l13.4-6.7l-4.8-14.2l14.2 4.8l6.7-13.4l6.7 13.4l14.2-4.8l-4.8 14.2l13.4 6.7l-13.4 6.6z"></svg:path><svg:path fill="#eee" d="M344 152L156.6 339.4a117 117 0 0 0 30.9 33.1L368 192v-40z"></svg:path></svg:g>`,
})
export class CircleFlagsIt67Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
