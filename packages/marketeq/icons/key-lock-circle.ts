import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKeyLockCircleIcon],svg[marketeq-key-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917a6.25 6.25 0 1 0-9.417 5.395l-.5 2.521a2.084 2.084 0 0 0 2.084 2.5h3.25a2.084 2.084 0 0 0 2.083-2.5l-.5-2.52a6.25 6.25 0 0 0 3-5.396"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqKeyLockCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
