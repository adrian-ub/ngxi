import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqIronIcon],svg[marketeq-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 35.417v6.25a2.083 2.083 0 0 1-2.084 2.083H16.667a2.083 2.083 0 0 1-2.084-2.083v-6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 4.167A28.08 28.08 0 0 1 37.5 27.52v7.896h-25V27.52A28.08 28.08 0 0 1 25 4.167"></svg:path></svg:g>`,
})
export class MarketeqIronIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
