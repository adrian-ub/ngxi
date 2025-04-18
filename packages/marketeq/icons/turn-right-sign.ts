import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnRightSignIcon],svg[marketeq-turn-right-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 20.833H16.667a2.083 2.083 0 0 0-2.084 2.084v18.75A2.083 2.083 0 0 1 12.5 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a8.333 8.333 0 0 1 8.333-8.333H31.25"></svg:path><svg:path stroke="#344054" d="M31.25 12.5V6.25l10.583 8.813a2.083 2.083 0 0 1 0 3.208L31.25 27.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnRightSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
