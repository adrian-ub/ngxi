import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagRightUpArrowIcon],svg[marketeq-zig-zag-right-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 6.25V37.5a6.25 6.25 0 0 1-6.25 6.25v0a6.25 6.25 0 0 1-6.25-6.25V18.75a6.25 6.25 0 0 0-12.5 0v25"></svg:path><svg:path stroke="#344054" d="M39.583 10.417L35.417 6.25l-4.167 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagRightUpArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
