import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagLeftRightArrowIcon],svg[marketeq-zig-zag-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 37.5h-25a6.25 6.25 0 0 1-6.25-6.25v0A6.25 6.25 0 0 1 18.75 25h12.5a6.25 6.25 0 0 0 0-12.5h-25"></svg:path><svg:path stroke="#344054" d="M39.583 41.667L43.75 37.5l-4.167-4.167m-29.166-25L6.25 12.5l4.167 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagLeftRightArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
