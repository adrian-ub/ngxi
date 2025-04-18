import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPowerOnOffSymbolIcon],svg[openmoji-power-on-off-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M36.058 55.173c10.594 0 19.182-8.588 19.182-19.182S46.652 16.81 36.058 16.81s-19.181 8.588-19.181 19.18s8.588 19.182 19.181 19.182"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" d="M36 24v24"></svg:path><svg:path stroke-linejoin="round" d="M36 56c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20Z"></svg:path></svg:g>`,
})
export class OpenmojiPowerOnOffSymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
