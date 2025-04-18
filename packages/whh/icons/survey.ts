import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSurveyIcon],svg[whh-survey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-344q-56 0-112-57t-56-115V172q0-58 56-115t112-57h687q57 0 113 57t56 115v424q0 58-56 115t-113 57m-471-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-128q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-128q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSurveyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
