import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBsIcon],svg[circle-flags-bs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBs0)"><svg:path fill="#338af3" d="M0 0h512v167l-37.4 89l37.4 89v167H0l49.6-252z"></svg:path><svg:path fill="#ffda44" d="M108.3 167H512v178H108.3z"></svg:path><svg:path fill="#333" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsBsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
