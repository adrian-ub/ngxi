import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkThinIcon],svg[ph-question-mark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 96c0 27.51-24.77 50.09-56 51.89V160a4 4 0 0 1-8 0v-16a4 4 0 0 1 4-4c28.67 0 52-19.74 52-44s-23.33-44-52-44s-52 19.74-52 44a4 4 0 0 1-8 0c0-28.67 26.92-52 60-52s60 23.33 60 52m-60 100a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhQuestionMarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
