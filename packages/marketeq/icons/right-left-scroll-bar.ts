import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRightLeftScrollBarIcon],svg[marketeq-right-left-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 12.5v25"></svg:path><svg:path stroke="#306CFE" d="M12.5 29.167L16.667 25L12.5 20.833m25 0L33.333 25l4.167 4.167M43.75 25H33.333M6.25 25h10.417z"></svg:path></svg:g>`,
})
export class MarketeqRightLeftScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
