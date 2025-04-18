import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsQuestionCircleIcon],svg[proicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.301 9.709a2.699 2.699 0 1 1 4.85 1.63a4 4 0 0 1-.32.317c-.092.078-.137.11-.227.171l-.979.675a1.81 1.81 0 0 0-.784 1.493"></svg:path><svg:circle cx="11.828" cy="16.74" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class ProiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
