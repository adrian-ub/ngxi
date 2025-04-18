import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangKvIcon],svg[circle-flags-lang-kv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangKv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangKv0)"><svg:path fill="#6da544" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#eee" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v167H0Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangKvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
