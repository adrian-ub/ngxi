import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownUpScrollBarIcon],svg[marketeq-down-up-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 25h-25"></svg:path><svg:path stroke="#306CFE" d="M20.833 37.5L25 33.333l4.167 4.167m0-25L25 16.667L20.833 12.5M25 33.333V43.75m0-37.5v10.417z"></svg:path></svg:g>`,
})
export class MarketeqDownUpScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
