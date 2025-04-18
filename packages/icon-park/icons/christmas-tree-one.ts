import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChristmasTreeOneIcon],svg[icon-park-christmas-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36V44"></svg:path><svg:path fill="#2F88FF" d="M14 15L24 4L34 15L31 18L39 26L34 27.1579L42 36H6L14 27.1579L9 26L17 18L14 15Z"></svg:path></svg:g>`,
})
export class IconParkChristmasTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
