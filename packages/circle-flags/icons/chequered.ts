import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsChequeredIcon],svg[circle-flags-chequered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsChequered0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsChequered0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#333" d="M384 0h128v128H0v128h512v128H0v128h128V0h128v512h128z"></svg:path></svg:g>`,
})
export class CircleFlagsChequeredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
