import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBasketballHoopIcon],svg[marketeq-basketball-hoop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m10.417 16.667l2.083 25M12.5 25h25zm25 8.333h-25zm2.083-16.666l-2.083 25zm-9.729 0l-.687 25zm-9.708 0l.687 25z"></svg:path><svg:path stroke="#344054" d="M39.583 8.333H10.417a4.167 4.167 0 1 0 0 8.334h29.166a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqBasketballHoopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
