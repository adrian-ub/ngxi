import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangLuIcon],svg[circle-flags-lang-lu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangLu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangLu0)"><svg:path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z"></svg:path><svg:path fill="#ffda44" d="M401.9 0L0 401.9V449l63 63h47.3L512 110.3V63L449 0z"></svg:path><svg:path fill="#d80027" d="M449 0L0 449v63h63L512 63V0z"></svg:path><svg:path fill="#ffda44" d="m136.4 78l13.8 42.4H195l-36 26.3l13.7 42.5l-36.2-26.3l-36 26.3l13.7-42.5L78 120.4h44.7z"></svg:path></svg:g>`,
})
export class CircleFlagsLangLuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
