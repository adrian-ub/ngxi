import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangGuIcon],svg[circle-flags-lang-gu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangGu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangGu0)"><svg:path fill="#eee" d="M256 96L0 128v128l256 32l256-32V128zm0 256L0 384v128h512V384z"></svg:path><svg:path fill="#d80027" d="M0 0h512v128H0zm0 256h512v128H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangGuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
