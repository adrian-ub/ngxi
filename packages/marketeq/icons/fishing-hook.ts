import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFishingHookIcon],svg[marketeq-fishing-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m31.25 33.333l4.167-2.083v4.167a8.333 8.333 0 0 1-16.667 0V20.833m0-8.333V6.25"></svg:path><svg:path stroke="#344054" d="M18.75 20.833a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqFishingHookIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
