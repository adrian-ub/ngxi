import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpTrendIcon],svg[marketeq-up-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 12.5L29.167 27.083l-6.25-6.25L6.25 37.5"></svg:path><svg:path stroke="#344054" d="M43.75 20.833V12.5h-8.333"></svg:path></svg:g>`,
})
export class MarketeqUpTrendIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
