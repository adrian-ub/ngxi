import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTipsOneIcon],svg[icon-park-tips-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M24 23V32"></svg:path><svg:path stroke="#fff" d="M24 16V17"></svg:path></svg:g>`,
})
export class IconParkTipsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
