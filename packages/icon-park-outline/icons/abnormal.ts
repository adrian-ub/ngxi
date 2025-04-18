import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAbnormalIcon],svg[icon-park-outline-abnormal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M16 14h13m-13 7h5"></svg:path><svg:circle cx="34" cy="34" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" transform="rotate(90 34 34)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M34 36v3"></svg:path><svg:circle cx="34" cy="30" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineAbnormalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
