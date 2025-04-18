import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagLeftUpArrowIcon],svg[marketeq-zig-zag-left-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 43.75v-25a6.25 6.25 0 1 0-12.5 0V37.5a6.25 6.25 0 1 1-12.5 0V6.25"></svg:path><svg:path stroke="#344054" d="M18.75 10.417L14.583 6.25l-4.166 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagLeftUpArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
