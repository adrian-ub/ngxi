import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAwIcon],svg[circle-flags-aw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAw0)"><svg:path fill="#ffda44" d="m0 322.8l253.6-18.4L512 322.8v33.4l-258 15.3L0 356.2zm0 66.8l257.2-13.8L512 389.6V423l-253 16.9L0 423z"></svg:path><svg:path fill="#338af3" d="M0 0h512v322.8H0zm0 356.2h512v33.4H0zM0 423h512v89H0z"></svg:path><svg:path fill="#eee" d="m117.3 161.5l-50-22.1l50-22l22-50.1l22.2 50l50 22l-50 22.2l-22.1 50z"></svg:path><svg:path fill="#d80027" d="m139.4 94.9l13.6 30.9l31 13.6l-31 13.6l-13.6 31l-13.6-31l-31-13.6l31-13.6z"></svg:path></svg:g>`,
})
export class CircleFlagsAwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
