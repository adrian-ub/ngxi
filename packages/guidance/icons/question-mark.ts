import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceQuestionMarkIcon],svg[guidance-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8.5v-1a7 7 0 0 1 14 0a4.83 4.83 0 0 1-1.414 3.414l-2.414 2.414A4 4 0 0 0 14 16.157v.343h-4v-1.172c0-1.81.72-3.547 2-4.828l1.293-1.293A2.4 2.4 0 0 0 14 7.5a2 2 0 1 0-4 0v1zm7 11a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"></svg:path>`,
})
export class GuidanceQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
