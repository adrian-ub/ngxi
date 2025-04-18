import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUserIcon],svg[marketeq-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 31.25h12.5a10.417 10.417 0 0 1 10.417 10.417a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083A10.417 10.417 0 0 1 18.75 31.25"></svg:path><svg:path stroke="#306CFE" d="M25 22.917A8.333 8.333 0 1 0 25 6.25a8.333 8.333 0 0 0 0 16.667"></svg:path></svg:g>`,
})
export class MarketeqUserIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
