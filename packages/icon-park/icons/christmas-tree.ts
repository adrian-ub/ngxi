import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChristmasTreeIcon],svg[icon-park-christmas-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 14L16 12L24 4L32 12L28 14L36 22L30 24L39 34H9L17 24L12 22L20 14Z"></svg:path><svg:path d="M31 44H17"></svg:path><svg:path d="M21 34L20 44"></svg:path><svg:path d="M27 34L28 44"></svg:path></svg:g>`,
})
export class IconParkChristmasTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
