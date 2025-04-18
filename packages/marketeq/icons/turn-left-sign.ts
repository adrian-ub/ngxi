import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnLeftSignIcon],svg[marketeq-turn-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M18.75 20.833h14.583a2.083 2.083 0 0 1 2.084 2.084v18.75A2.083 2.083 0 0 0 37.5 43.75h4.167a2.083 2.083 0 0 0 2.083-2.083V20.833a8.333 8.333 0 0 0-8.333-8.333H18.75"></svg:path><svg:path stroke="#344054" d="M18.75 12.5V6.25L8.167 15.063a2.083 2.083 0 0 0 0 3.208l10.583 8.812v-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
