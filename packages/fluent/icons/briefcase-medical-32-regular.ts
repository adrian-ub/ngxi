import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcaseMedical32RegularIcon],svg[fluent-briefcase-medical-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h6a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1m-3 1v2H7.5A4.5 4.5 0 0 0 3 12.5v11A4.5 4.5 0 0 0 7.5 28h17a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 24.5 8H22V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3m14.5 4a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 23.5v-11A2.5 2.5 0 0 1 7.5 10zM16 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentBriefcaseMedical32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
