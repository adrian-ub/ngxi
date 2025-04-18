import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDownArrowIcon],svg[marketeq-up-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 41.667V8.333m6.25 6.25l-6.25-6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="m27.083 35.417l6.25 6.25l6.25-6.25m-6.25-27.084v33.334"></svg:path></svg:g>`,
})
export class MarketeqUpDownArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
