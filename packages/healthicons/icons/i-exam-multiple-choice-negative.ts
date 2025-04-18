import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIExamMultipleChoiceNegativeIcon],svg[healthicons-i-exam-multiple-choice-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsIExamMultipleChoiceNegative0)"><svg:path d="M21 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M16 26h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-4 5v-3h3v3z" clip-rule="evenodd"></svg:path><svg:path d="M17.707 14.293a1 1 0 0 1 0 1.414L13 20.414l-2.707-2.707a1 1 0 1 1 1.414-1.414L13 17.586l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3m-3 7v16.5l3 4.5l3-4.5V20zM6 39V9a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIExamMultipleChoiceNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIExamMultipleChoiceNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
