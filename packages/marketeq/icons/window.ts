import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWindowIcon],svg[marketeq-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 25H10.417M25 6.25v37.5z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5zm33.333 0H10.417V8.333A2.083 2.083 0 0 1 12.5 6.25h25a2.083 2.083 0 0 1 2.083 2.083z"></svg:path></svg:g>`,
})
export class MarketeqWindowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
