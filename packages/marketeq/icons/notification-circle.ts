import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNotificationCircleIcon],svg[marketeq-notification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 37.5h-12.5a6.25 6.25 0 0 0 12.5 0"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75v8.333l2.875 2.875A4.417 4.417 0 0 1 37.25 37.5h-24.5a4.416 4.416 0 0 1-3.125-7.542l2.875-2.875V18.75A12.5 12.5 0 0 1 25 6.25a12.5 12.5 0 0 1 6 1.52"></svg:path><svg:path stroke="#344054" d="M29.167 12.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0"></svg:path></svg:g>`,
})
export class MarketeqNotificationCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
