import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqInfinite2Icon],svg[marketeq-infinite-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.917 30.875A7.77 7.77 0 1 0 30.5 19.5l-11 11a7.77 7.77 0 1 1-.417-11.375"></svg:path>`,
})
export class MarketeqInfinite2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
