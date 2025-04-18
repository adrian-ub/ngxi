import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsInTgIcon],svg[circle-flags-in-tg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsInTg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsInTg0)"><svg:path fill="#eee" d="M0 0h512v128l-256 64L0 128Z"></svg:path><svg:path fill="#338af3" d="M0 128h512v128l-256 64L0 256Z"></svg:path><svg:path fill="#ff9811" d="M0 256h512v128l-256 64L0 384Z"></svg:path><svg:path fill="#496e2d" d="M0 384h512v128H0z"></svg:path></svg:g>`,
})
export class CircleFlagsInTgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
