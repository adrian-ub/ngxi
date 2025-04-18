import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCautionSignCircleIcon],svg[marketeq-caution-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 34.375h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 25V14.583"></svg:path></svg:g>`,
})
export class MarketeqCautionSignCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
