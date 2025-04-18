import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOneIcon],svg[icon-park-phone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="38" x="5" y="5" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:rect width="8" height="24" x="11" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="12" height="6" x="25" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="25" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="25" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="25" cy="36" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="36" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="36" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkPhoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
