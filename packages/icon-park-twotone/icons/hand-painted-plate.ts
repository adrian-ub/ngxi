import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHandPaintedPlateIcon],svg[icon-park-twotone-hand-painted-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHandPaintedPlate0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="4" d="M18 10h24a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18"></svg:path><svg:path fill="#555" stroke="#fff" stroke-width="4" d="M4 12a2 2 0 0 1 2-2h12v30H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 17v4m26-5L25 33"></svg:path><svg:rect width="4" height="4" x="9" y="25" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="9" y="31" fill="#fff" rx="2"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHandPaintedPlate0)"></svg:path>`,
})
export class IconParkTwotoneHandPaintedPlateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
