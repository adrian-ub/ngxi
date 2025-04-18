import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMovingPictureIcon],svg[icon-park-moving-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:rect width="20" height="20" x="6" y="22" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 6L42 6L42 18"></svg:path><svg:circle cx="34" cy="42" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 6 14)"></svg:circle><svg:circle cx="42" cy="42" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 6 6)"></svg:circle><svg:circle cx="42" cy="34" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 14 6)"></svg:circle><svg:circle cx="42" cy="26" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 22 6)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 34L12.1195 29.4103C13.2239 28.5821 14.7509 28.6143 15.8192 29.4885L25 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 6L30 18"></svg:path></svg:g>`,
})
export class IconParkMovingPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
