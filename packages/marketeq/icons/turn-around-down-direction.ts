import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundDownDirectionIcon],svg[marketeq-turn-around-down-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 41.667V15.625a9.355 9.355 0 0 1 9.375-9.375v0a9.354 9.354 0 0 1 9.375 9.375V43.75"></svg:path><svg:path stroke="#344054" d="m37.5 37.5l-6.25 6.25L25 37.5"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundDownDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
