import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGoalIcon],svg[marketeq-goal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 18.75l-5.208 5.208zm0-6.25v6.25h6.25l6.25-6.25H37.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25.688 6.25H25A18.75 18.75 0 1 0 43.75 25v-.687"></svg:path><svg:path stroke="#306CFE" d="M35.208 27.083a10.417 10.417 0 1 1-12.291-12.291"></svg:path></svg:g>`,
})
export class MarketeqGoalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
