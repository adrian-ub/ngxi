import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIExamQualificationNegativeIcon],svg[healthicons-i-exam-qualification-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsIExamQualificationNegative0)"><svg:path d="M15 32a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M20.923 15.615a1 1 0 0 0-1.846 0l-3.742 8.98l-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 26h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978l-.017-.042zM20 18.6l2.25 5.4h-4.5z" clip-rule="evenodd"></svg:path><svg:path d="M30 21a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1M28 7l7 8h-6a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIExamQualificationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIExamQualificationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
