import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBagAltIcon],svg[marketeq-bag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 14.583v4.167a6.25 6.25 0 0 0 12.5 0v-4.167"></svg:path><svg:path stroke="#306CFE" d="M41.417 43.75H8.583A2.082 2.082 0 0 1 6.5 41.438l3.708-33.334a2.083 2.083 0 0 1 2.084-1.854h25.416a2.083 2.083 0 0 1 2.084 1.854L43.5 41.438a2.084 2.084 0 0 1-2.083 2.312"></svg:path></svg:g>`,
})
export class MarketeqBagAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
