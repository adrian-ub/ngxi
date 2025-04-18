import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAlphaIcon],svg[marketeq-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.667 12.5s-7.438 27.083-22.813 27.083c-11.75 0-13.166-6.979-12.5-12.979c.834-6.583 6.875-16.187 16.021-16.187c14.583 0 9.063 29.166 21.375 29.166"></svg:path>`,
})
export class MarketeqAlphaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
