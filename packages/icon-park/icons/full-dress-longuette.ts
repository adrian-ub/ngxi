import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFullDressLonguetteIcon],svg[icon-park-full-dress-longuette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18 18L14 10H34L30 18V24L40.5 44H7L18 24V18Z"></svg:path><svg:path stroke="#000" d="M20 4V10"></svg:path><svg:path stroke="#000" d="M28 4V10"></svg:path><svg:path stroke="#fff" d="M18 21L30 21"></svg:path><svg:path stroke="#000" d="M18 19V23"></svg:path><svg:path stroke="#000" d="M30 19V23"></svg:path></svg:g>`,
})
export class IconParkFullDressLonguetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
