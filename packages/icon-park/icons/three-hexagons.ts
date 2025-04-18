import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeHexagonsIcon],svg[icon-park-three-hexagons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 27L14 21L4 27V39L14 45L24 39V27Z"></svg:path><svg:path d="M44 27L34 21L24 27V39L34 45L44 39V27Z"></svg:path><svg:path d="M34 9L24 3L14 9V21L24 27L34 21V9Z"></svg:path></svg:g>`,
})
export class IconParkThreeHexagonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
