import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCheckeredIcon],svg[circle-flags-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCheckered0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCheckered0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#333" d="M384 0h128v128H0v128h512v128H0v128h128V0h128v512h128z"></svg:path></svg:g>`,
})
export class CircleFlagsCheckeredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
