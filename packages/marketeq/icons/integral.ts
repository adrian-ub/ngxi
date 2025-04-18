import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqIntegralIcon],svg[marketeq-integral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.417 39.583l.791 1.584a4.668 4.668 0 0 0 8.605-.605L25 25l5.188-15.562a4.67 4.67 0 0 1 4.437-3.188v0a4.67 4.67 0 0 1 4.167 2.583l.791 1.584"></svg:path>`,
})
export class MarketeqIntegralIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
