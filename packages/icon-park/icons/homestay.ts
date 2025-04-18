import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHomestayIcon],svg[icon-park-homestay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8.00042 25.9999C10.3186 26.1968 18.0008 27.9999 18.0004 30.9999C18 34 13.8646 32.9889 12.0004 32.9999C10.3989 32.864 5.9996 33 5.99994 36C6.00027 39 13 41 20 42C27 43 38.0001 42.9999 38.0001 42.9999"></svg:path><svg:path d="M8 20L14 14"></svg:path><svg:path d="M28 6L38 6L42 10"></svg:path><svg:path fill="#2F88FF" d="M30 14L36 20H20L14 14H30Z"></svg:path><svg:path d="M42 22V16"></svg:path><svg:path d="M26 30V26"></svg:path><svg:path d="M32 34V26"></svg:path></svg:g>`,
})
export class IconParkHomestayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
