import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSvIcon],svg[circle-flags-sv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSv0)"><svg:path fill="#0052b4" d="M0 0h512v144.7l-40.5 112.6l40.5 110V512H0V367.3l42.2-114L0 144.7z"></svg:path><svg:path fill="#eee" d="M0 144.7h512v222.6H0z"></svg:path><svg:path fill="#ffda44" d="m204.6 267.1l51.4-89l51.4 89z"></svg:path><svg:path fill="#6da544" d="M322.8 296.5L256 330l-66.8-33.4V252h133.6z"></svg:path><svg:path fill="#ffda44" d="m319 182l-23.6 23.5a55.5 55.5 0 0 1-39.4 95a55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0"></svg:path></svg:g>`,
})
export class CircleFlagsSvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
