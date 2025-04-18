import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStraightRazorIcon],svg[icon-park-straight-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="6" x="3.609" y="36.534" fill="#2F88FF" rx="2" transform="rotate(-10 3.61 36.534)"></svg:rect><svg:path d="M44 40L40 36"></svg:path><svg:path fill="#2F88FF" d="M8 4L26.3848 22.3848L22.1421 26.6274C22.1421 26.6274 12.2426 16.7279 9.41419 13.8995C6.58577 11.071 6.58575 9.65682 6.58577 8.24262C6.58579 6.82843 8 4 8 4Z"></svg:path><svg:path d="M8 4L26 22L35 31"></svg:path></svg:g>`,
})
export class IconParkStraightRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
