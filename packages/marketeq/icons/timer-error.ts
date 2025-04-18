import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTimerErrorIcon],svg[marketeq-timer-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 34.375h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M18.75 6.25h12.5M25 25v-4.167zm0-12.5V6.25z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m36.042 17.083l3.125-3.125zm-22.084 0l-3.125-3.125zM9.375 28.125a15.625 15.625 0 1 0 31.25 0a15.625 15.625 0 0 0-31.25 0"></svg:path></svg:g>`,
})
export class MarketeqTimerErrorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
