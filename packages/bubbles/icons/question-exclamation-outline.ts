import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesQuestionExclamationOutlineIcon],svg[bubbles-question-exclamation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" clip-path="url(#bubblesQuestionExclamationOutline0)"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.425 20.075L7.5 22v-4h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 19a1 1 0 0 0 1 1h4l4 4v-4h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1zm-4-12.5a2 2 0 1 1 2.667 1.886a1 1 0 0 0-.667.943v.672m8 4.999v-2"></svg:path><svg:path stroke-width="1.5" d="M9.5 12.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M17.5 17.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesQuestionExclamationOutline0"><svg:path fill="#fff" d="M0 .5h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesQuestionExclamationOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
