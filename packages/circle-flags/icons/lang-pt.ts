import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangPtIcon],svg[circle-flags-lang-pt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangPt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangPt0)"><svg:path fill="#6da544" d="M0 512h167l37.9-260.3L167 0H0z"></svg:path><svg:path fill="#d80027" d="M512 0H167v512h345z"></svg:path><svg:circle cx="167" cy="256" r="89" fill="#ffda44"></svg:circle><svg:path fill="#d80027" d="M116.9 211.5V267a50 50 0 1 0 100.1 0v-55.6H117z"></svg:path><svg:path fill="#eee" d="M167 283.8c-9.2 0-16.7-7.5-16.7-16.7V245h33.4v22c0 9.2-7.5 16.7-16.7 16.7z"></svg:path></svg:g>`,
})
export class CircleFlagsLangPtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
