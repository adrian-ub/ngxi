import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBracket2Icon],svg[marketeq-bracket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h4.167A2.083 2.083 0 0 1 37.5 8.333v12.5A4.167 4.167 0 0 0 41.667 25a4.167 4.167 0 0 0-4.167 4.167v12.5a2.083 2.083 0 0 1-2.083 2.083H31.25"></svg:path><svg:path stroke="#306CFE" d="M18.75 6.25h-4.167A2.083 2.083 0 0 0 12.5 8.333v12.5A4.167 4.167 0 0 1 8.333 25a4.167 4.167 0 0 1 4.167 4.167v12.5a2.083 2.083 0 0 0 2.083 2.083h4.167"></svg:path></svg:g>`,
})
export class MarketeqBracket2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
