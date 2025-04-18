import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHomeIcon],svg[icon-park-outline-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 18v24h30V18L24 6z"></svg:path><svg:path stroke-linejoin="round" d="M19 29v13h10V29z"></svg:path><svg:path stroke-linecap="round" d="M9 42h30"></svg:path></svg:g>`,
})
export class IconParkOutlineHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
