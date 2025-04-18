import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneArcDeTriompheIcon],svg[icon-park-twotone-arc-de-triomphe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTArcDeTriomphe0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 16v28h10V29a6 6 0 0 1 12 0v15h10V16z"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M5 10h38v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"></svg:path><svg:path stroke-linecap="round" d="M5 4h38M8 4v5m32-5v5M8 28h10m12 0h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTArcDeTriomphe0)"></svg:path>`,
})
export class IconParkTwotoneArcDeTriompheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
