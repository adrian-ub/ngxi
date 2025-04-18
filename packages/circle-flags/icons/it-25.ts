import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt25Icon],svg[circle-flags-it-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt250" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt250)"><svg:path fill="#6da544" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M253.9 161.3a62.7 62.7 0 1 1 71.5 30.3a33.7 33.7 0 1 0 25.3 62.3a62.7 62.7 0 1 1-30.3 71.5a33.7 33.7 0 1 0-62.3 25.3a62.7 62.7 0 1 1-71.5-30.3a33.7 33.7 0 1 0-25.3-62.3a62.7 62.7 0 1 1 30.3-71.5a33.7 33.7 0 1 0 62.3-25.3"></svg:path></svg:g>`,
})
export class CircleFlagsIt25Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
