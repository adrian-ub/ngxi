import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPowerSymbolIcon],svg[openmoji-power-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.98" cy="35.915" r="19.084" fill="#fff"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.527 16.917s5.732-2.394 13.128.072"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M29.333 17A20.075 20.075 0 0 0 16 35.929C16 47.014 24.954 56 36 56s20-8.986 20-20.071c0-8.74-5.565-16.174-13.333-18.929"></svg:path><svg:path d="M36 11v25"></svg:path></svg:g>`,
})
export class OpenmojiPowerSymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
