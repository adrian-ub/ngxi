import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpScrollBarIcon],svg[marketeq-double-up-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 25h-25"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417L25 6.25l4.167 4.167M20.833 37.5L25 33.333l4.167 4.167M25 33.333V43.75m0-27.083V6.25z"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
