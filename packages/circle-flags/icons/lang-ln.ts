import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangLnIcon],svg[circle-flags-lang-ln-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangLn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangLn0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#ffda44" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#333" d="M144 423L256 79l112 344L75 211h362z"></svg:path><svg:path fill="#eee" d="m175 381l81-250l81 250l-213-154h264z"></svg:path></svg:g>`,
})
export class CircleFlagsLangLnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
