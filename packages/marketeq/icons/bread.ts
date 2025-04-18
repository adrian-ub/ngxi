import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBreadIcon],svg[marketeq-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 14.583C43.75 9.98 35.417 6.25 25 6.25S6.25 9.98 6.25 14.583c0 2.084 1.563 3.792 4.167 5.23v21.854A2.083 2.083 0 0 0 12.5 43.75h25a2.083 2.083 0 0 0 2.083-2.083V19.813c2.605-1.438 4.167-3.146 4.167-5.23"></svg:path>`,
})
export class MarketeqBreadIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
