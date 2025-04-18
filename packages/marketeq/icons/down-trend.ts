import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownTrendIcon],svg[marketeq-down-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m6.25 12.5l16.667 16.667l6.25-6.25L43.75 37.5"></svg:path><svg:path stroke="#344054" d="M35.417 37.5h8.333v-8.333"></svg:path></svg:g>`,
})
export class MarketeqDownTrendIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
