import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPassportOneIcon],svg[icon-park-passport-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M13 40L9 40C7.89543 40 7 39.1046 7 38L7 6C7 4.89543 7.89543 4 9 4L29 4C30.1046 4 31 4.89543 31 6L31 10"></svg:path><svg:rect width="34" height="28" x="13" y="44" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(-90 13 44)"></svg:rect><svg:circle cx="27" cy="27" r="8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M34.9998 28C34.9998 28 32 27.5 29.9995 29C27.999 30.5 27.401 34.1025 27.9999 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27C24 29 22 31 20 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20C31 20 31 24 28 24"></svg:path></svg:g>`,
})
export class IconParkPassportOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
