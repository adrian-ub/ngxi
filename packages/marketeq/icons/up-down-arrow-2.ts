import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDownArrow2Icon],svg[marketeq-up-down-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 6.25v37.5"></svg:path><svg:path stroke="#344054" d="M18.75 12.5L25 6.25l6.25 6.25m0 25L25 43.75l-6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqUpDownArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
