import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTuchongIcon],svg[icon-park-tuchong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 39H43V28H37V33H11V15H23V9H5V39Z"></svg:path><svg:path stroke-linecap="round" d="M43 16V22C35 22 29 17 29 9H35C35 13 37 16 43 16Z"></svg:path></svg:g>`,
})
export class IconParkTuchongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
