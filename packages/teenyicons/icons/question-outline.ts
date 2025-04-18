import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionOutlineIcon],svg[teenyicons-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 0 0 2-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1"></svg:path>`,
})
export class TeenyiconsQuestionOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
