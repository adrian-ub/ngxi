import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSrIcon],svg[circle-flags-sr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSr0)"><svg:path fill="#6da544" d="M0 0h512v111.3l-85.3 143.1L512 400.7V512H0V400.7l87-149L0 111.3z"></svg:path><svg:path fill="#eee" d="M0 111.3h512V167l-41 84.7l41 93.3v55.7H0V345l44.2-86.6L0 167z"></svg:path><svg:path fill="#a2001d" d="M0 167h512v178H0z"></svg:path><svg:path fill="#ffda44" d="m256 167l22.1 68h71.5l-57.8 42l22 68l-57.8-42l-57.9 42l22.1-68l-57.8-42h71.5z"></svg:path></svg:g>`,
})
export class CircleFlagsSrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
