import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChimneyIcon],svg[icon-park-solid-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSChimney0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 44h40M13 14h22"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M16 14h16l4 30H12z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 24h18M13 34h22"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m32 14l4 30M16 14l-4 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m24 8l.828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSChimney0)"></svg:path>`,
})
export class IconParkSolidChimneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
