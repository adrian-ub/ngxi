import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundUpDirectionIcon],svg[marketeq-turn-around-up-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 8.333v26.042a9.353 9.353 0 0 1-9.375 9.375v0a9.356 9.356 0 0 1-9.375-9.375V6.25"></svg:path><svg:path stroke="#344054" d="m12.5 12.5l6.25-6.25L25 12.5"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundUpDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
