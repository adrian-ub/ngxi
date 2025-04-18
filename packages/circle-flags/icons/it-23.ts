import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt23Icon],svg[circle-flags-it-23-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt230" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt230)"><svg:path fill="#333" d="M0 0h256l64 256l-64 256H0z"></svg:path><svg:path fill="#d80027" d="M256 0h256v512H256z"></svg:path></svg:g>`,
})
export class CircleFlagsIt23Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
