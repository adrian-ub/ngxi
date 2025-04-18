import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcaseOff32FilledIcon],svg[fluent-briefcase-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.238 27.652l2.055 2.055a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l4.37 4.37A4.5 4.5 0 0 0 3 12.5V14a3 3 0 0 0 3 3h7v-.5a1.5 1.5 0 0 1 .773-1.312l5.04 5.039A1.5 1.5 0 0 1 17.5 21h-3a1.5 1.5 0 0 1-1.5-1.5V19H6a4.98 4.98 0 0 1-3-1v5.5A4.5 4.5 0 0 0 7.5 28h17a4.5 4.5 0 0 0 1.738-.348M22.535 19l6.152 6.152A4.5 4.5 0 0 0 29 23.5V18c-.835.628-1.874 1-3 1zM10 6.466L20.535 17H26a3 3 0 0 0 3-3v-1.5A4.5 4.5 0 0 0 24.5 8H22V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3zM13 5h6a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentBriefcaseOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
