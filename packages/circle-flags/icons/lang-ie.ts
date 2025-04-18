import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangIeIcon],svg[circle-flags-lang-ie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangIe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangIe0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#d80027" d="M256 72a184 184 0 1 0 130 314A184 184 0 0 0 256 72m0 48c35 0 70 13 96 40c22 22 22 57 0 79a55 55 0 0 1-79 0a104 104 0 0 0-153 6a138 138 0 0 1 136-125m-56 136c14 0 28 6 39 17a104 104 0 0 0 153-6c-3 31-16 61-40 85c-52 53-137 53-190 2l-1-1a24 24 0 0 0-1-1a55 55 0 0 1 0-79c11-11 25-17 40-17"></svg:path></svg:g>`,
})
export class CircleFlagsLangIeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
