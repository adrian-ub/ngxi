import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaComponentIcon],svg[icon-park-figma-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 12L24 5L31 12L24 19L17 12Z"></svg:path><svg:path d="M17 36L24 29L31 36L24 43L17 36Z"></svg:path><svg:path d="M29 24L36 17L43 24L36 31L29 24Z"></svg:path><svg:path d="M5 24L12 17L19 24L12 31L5 24Z"></svg:path></svg:g>`,
})
export class IconParkFigmaComponentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
