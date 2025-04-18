import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIExamQualificationOutlineIcon],svg[healthicons-i-exam-qualification-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 32a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M20.923 15.615a1 1 0 0 0-1.846 0l-3.742 8.98l-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 26h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978l-.017-.042zM20 18.6l2.25 5.4h-4.5z" clip-rule="evenodd"></svg:path><svg:path d="M30 21a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M38 15L28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4zm-11 0a1 1 0 0 0 1 1h8v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h13zm7.388-1L29 8.073V14z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsIExamQualificationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
