import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangTnIcon],svg[circle-flags-lang-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangTn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangTn0)"><svg:path fill="#338af3" d="M0 0h512v178l-31 76.9l31 79.1v178H0V334l37-80.7L0 178z"></svg:path><svg:path fill="#333" d="m0 211.5l256-19.2l256 19.2v89l-254.6 20.7L0 300.5z"></svg:path><svg:path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangTnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
