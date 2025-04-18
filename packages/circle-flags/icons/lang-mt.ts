import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMtIcon],svg[circle-flags-lang-mt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMt0)"><svg:path fill="#eee" d="M0 0h256l52 259.2L256 512H0z"></svg:path><svg:path fill="#d80027" d="M256 0h256v512H256z"></svg:path><svg:path fill="#acabb1" d="M178 100.2V66.8h-33.3v33.4h-33.4v33.4h33.4V167h33.4v-33.4h33.4v-33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsLangMtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
