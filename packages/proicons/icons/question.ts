import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsQuestionIcon],svg[proicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.817 8.808a4.183 4.183 0 1 1 7.518 2.526l-.133.145c-.065.07-.29.286-.363.347a4 4 0 0 1-.353.266l-1.517 1.045a2.81 2.81 0 0 0-1.215 2.315"></svg:path><svg:circle cx="11.754" cy="19.141" r=".984" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
