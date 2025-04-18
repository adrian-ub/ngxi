import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircle24pxIcon],svg[healthicons-question-circle-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0ZM10.75 9.8c0-.162.284-.8 1.31-.8c1.024 0 1.308.638 1.308.8c0 .067-.206.784-1.527.8a2.06 2.06 0 0 0-2.036 2.06V14c0 .584.25 1.11.65 1.476a2 2 0 1 0 2.645.048a2 2 0 0 0 .683-1.231c1.928-.623 3.585-2.193 3.585-4.493c0-2.961-2.715-4.8-5.309-4.8S6.75 6.839 6.75 9.8a2 2 0 1 0 4 0Z"></svg:path>`,
})
export class HealthiconsQuestionCircle24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
