import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWaterBottleIcon],svg[marketeq-water-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 10.417h10.417a4.167 4.167 0 0 1 4.166 4.166V25a4.167 4.167 0 0 1-4.166 4.167H31.25"></svg:path><svg:path stroke="#306CFE" d="M25 8.333a2.083 2.083 0 0 0-2.083-2.083H18.75a2.083 2.083 0 0 0-2.083 2.083v6.25H25zm2.083 6.25h-12.5a4.167 4.167 0 0 0-4.166 4.167v22.917A2.083 2.083 0 0 0 12.5 43.75h16.667a2.083 2.083 0 0 0 2.083-2.083V18.75a4.167 4.167 0 0 0-4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqWaterBottleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
