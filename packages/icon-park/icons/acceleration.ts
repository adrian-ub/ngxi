import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAccelerationIcon],svg[icon-park-acceleration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M42 35H34"></svg:path><svg:path d="M31 42H27"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M14 22L8 17H4C4 17 9.486 27 11.9999 27H44L38 22H14Z"></svg:path><svg:path stroke-linejoin="round" d="M30 22L18.6606 14L16 14L19 22"></svg:path><svg:path stroke-linejoin="round" d="M30 27L17.2 39L14 39L18.2667 27"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M32 11C32 12 29 13 29 13L39 13C39 13 41.8855 13 42.7446 10.7143C43.6299 8.35854 42.0442 5 39.0221 5C36 5 36 8 36 8C36 8 34.1454 7.42857 33 8C31.8546 8.57143 32 10 32 11Z"></svg:path></svg:g>`,
})
export class IconParkAccelerationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
