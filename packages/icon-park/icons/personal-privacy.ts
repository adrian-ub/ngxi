import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPersonalPrivacyIcon],svg[icon-park-personal-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF"></svg:circle><svg:path d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:rect width="14" height="10" x="27" y="31" fill="#2F88FF"></svg:rect><svg:path d="M37 31V28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28V31"></svg:path></svg:g>`,
})
export class IconParkPersonalPrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
