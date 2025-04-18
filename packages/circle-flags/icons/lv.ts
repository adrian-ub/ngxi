import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLvIcon],svg[circle-flags-lv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLv0)"><svg:path fill="#a2001d" d="M0 0h512v189.2l-38.5 70l38.5 63.6V512H0V322.8l39.4-63L0 189.1z"></svg:path><svg:path fill="#eee" d="M0 189.2h512v133.6H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
