import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipBackThinIcon],svg[ph-skip-back-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.87 37.52a12 12 0 0 0-12.18.32L60 116.44V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-76.44l125.69 78.6a12 12 0 0 0 12.18.32a11.69 11.69 0 0 0 6.13-10.36V47.88a11.69 11.69 0 0 0-6.13-10.36M196 208.12a3.8 3.8 0 0 1-2 3.37a4 4 0 0 1-4.06-.11L61.82 131.26a3.83 3.83 0 0 1 0-6.52l128.12-80.12a4 4 0 0 1 2.11-.62a4 4 0 0 1 1.95.51a3.8 3.8 0 0 1 2 3.37Z"></svg:path>`,
})
export class PhSkipBackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
