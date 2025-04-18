import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FeedbackResponseSolidIcon],svg[fluent-mdl2-feedback-response-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128zm-421 429l-136-136l-659 659l-275-275l-136 136l411 411z"></svg:path>`,
})
export class FluentMdl2FeedbackResponseSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
