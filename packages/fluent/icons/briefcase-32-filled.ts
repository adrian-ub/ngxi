import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcase32FilledIcon],svg[fluent-briefcase-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h6a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1m-3 1v2H7.5A4.5 4.5 0 0 0 3 12.5V14a3 3 0 0 0 3 3h7v-.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v.5h7a3 3 0 0 0 3-3v-1.5A4.5 4.5 0 0 0 24.5 8H22V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3m3 13v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V19h7a4.98 4.98 0 0 0 3-1v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 23.5V18c.836.628 1.874 1 3 1z"></svg:path>`,
})
export class FluentBriefcase32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
