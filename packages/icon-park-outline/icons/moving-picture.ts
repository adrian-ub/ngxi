import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMovingPictureIcon],svg[icon-park-outline-moving-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="20" height="20" x="6" y="22" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 6h12v12"></svg:path><svg:circle cx="34" cy="42" r="1.5" fill="currentColor"></svg:circle><svg:circle r="1.5" fill="currentColor" transform="matrix(1 0 0 -1 6 14)"></svg:circle><svg:circle cx="42" cy="42" r="1.5" fill="currentColor"></svg:circle><svg:circle r="1.5" fill="currentColor" transform="matrix(1 0 0 -1 6 6)"></svg:circle><svg:circle cx="42" cy="34" r="1.5" fill="currentColor"></svg:circle><svg:circle r="1.5" fill="currentColor" transform="matrix(1 0 0 -1 14 6)"></svg:circle><svg:circle cx="42" cy="26" r="1.5" fill="currentColor"></svg:circle><svg:circle r="1.5" fill="currentColor" transform="matrix(1 0 0 -1 22 6)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 34l6.12-4.59a3 3 0 0 1 3.7.078L25 37M42 6L30 18"></svg:path></svg:g>`,
})
export class IconParkOutlineMovingPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
