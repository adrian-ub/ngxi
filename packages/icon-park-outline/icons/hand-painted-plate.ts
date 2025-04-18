import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandPaintedPlateIcon],svg[icon-park-outline-hand-painted-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M18 10h24a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18M4 12a2 2 0 0 1 2-2h12v30H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 17v4m26-5L25 33"></svg:path><svg:rect width="4" height="4" x="9" y="25" fill="currentColor" rx="2"></svg:rect><svg:rect width="4" height="4" x="9" y="31" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkOutlineHandPaintedPlateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
