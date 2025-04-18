import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpinningTopIcon],svg[icon-park-spinning-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44V41"></svg:path><svg:path fill="#2F88FF" d="M44 20L24 41L4 20H44Z"></svg:path><svg:path d="M44 12H4V20H44V12Z"></svg:path><svg:path d="M24 12V4"></svg:path></svg:g>`,
})
export class IconParkSpinningTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
