import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondNecklaceIcon],svg[icon-park-diamond-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17 32.4091L24 29L31 32.4091V39.9091L24 44L17 39.9091V32.4091Z"></svg:path><svg:path d="M8 4C8.45455 12.3333 14 29 24 29C34 29 40 12.7838 40 4"></svg:path></svg:g>`,
})
export class IconParkDiamondNecklaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
