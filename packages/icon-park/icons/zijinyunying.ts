import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkZijinyunyingIcon],svg[icon-park-zijinyunying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34 6H14L3 24L14 42H34L45 24L34 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M15 29L24 15L33 29H15Z"></svg:path></svg:g>`,
})
export class IconParkZijinyunyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
