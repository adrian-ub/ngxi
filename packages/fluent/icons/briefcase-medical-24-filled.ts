import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcaseMedical24FilledIcon],svg[fluent-briefcase-medical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 3.5h3.5a.75.75 0 0 1 .75.75V6h-5V4.25a.75.75 0 0 1 .75-.75M8 4.25V6H6.25A3.25 3.25 0 0 0 3 9.25v7.5A3.25 3.25 0 0 0 6.25 20h11.5A3.25 3.25 0 0 0 21 16.75v-7.5A3.25 3.25 0 0 0 17.75 6H16V4.25A2.25 2.25 0 0 0 13.75 2h-3.5A2.25 2.25 0 0 0 8 4.25m3.5 6.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5H13v1.75a.75.75 0 0 1-1.5 0V14H9.75a.75.75 0 0 1 0-1.5h1.75z"></svg:path>`,
})
export class FluentBriefcaseMedical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
