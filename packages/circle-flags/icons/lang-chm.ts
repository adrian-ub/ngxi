import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangChmIcon],svg[circle-flags-lang-chm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangChm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangChm0)"><svg:path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></svg:path><svg:path fill="#eee" d="M512 0v170H0V0Z"></svg:path><svg:path fill="#d80027" d="M512 342v170H0V342Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangChmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
