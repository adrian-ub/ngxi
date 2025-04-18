import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAqTrueSouthIcon],svg[circle-flags-aq-true-south-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAqTrueSouth0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAqTrueSouth0)"><svg:path fill="#eee" d="M0 256L256 28l256 228v256H0Z"></svg:path><svg:path fill="#0052b4" d="m114 256l142 228l142-228l-142 57ZM0 0h512v256H398L256 28L114 256H0Z"></svg:path></svg:g>`,
})
export class CircleFlagsAqTrueSouthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
