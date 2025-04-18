import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCargoShip2Icon],svg[marketeq-cargo-ship-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 31.25h-4.166M12.5 10.417v4.166z"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h35.417a2.083 2.083 0 0 1 1.958 2.812l-4.687 12.5a2.08 2.08 0 0 1-1.959 1.354h-25A2.08 2.08 0 0 1 9.896 38zm16.667 0l-1.688-6.75a2.08 2.08 0 0 0-2.083-1.584H8.333a2.083 2.083 0 0 0-2.083 2.084v6.25z"></svg:path></svg:g>`,
})
export class MarketeqCargoShip2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
