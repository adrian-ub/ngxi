import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaQuestionMarkFillIcon],svg[eva-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0a3 3 0 1 1 3 3a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9"></svg:path><svg:circle cx="12" cy="19" r="1" fill="currentColor"></svg:circle>`,
})
export class EvaQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
