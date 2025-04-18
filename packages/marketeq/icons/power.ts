import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPowerIcon],svg[marketeq-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25V25"></svg:path><svg:path stroke="#306CFE" d="M36.792 15.292a16.667 16.667 0 1 1-23.584 0"></svg:path></svg:g>`,
})
export class MarketeqPowerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
