import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideCircleIcon],svg[marketeq-divide-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 15.625h.208m-.208 18.75h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 25h20.834"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDivideCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
