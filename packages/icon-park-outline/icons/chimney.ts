import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChimneyIcon],svg[icon-park-outline-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40M13 14h22"></svg:path><svg:path stroke-linejoin="round" d="M16 14h16l4 30H12z"></svg:path><svg:path stroke-linecap="round" d="M15 24h18M13 34h22"></svg:path><svg:path stroke-linejoin="round" d="m32 14l4 30M16 14l-4 30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m24 8l.828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4"></svg:path></svg:g>`,
})
export class IconParkOutlineChimneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
