import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePhoneOneIcon],svg[icon-park-outline-phone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="38" x="5" y="5" stroke="currentColor" stroke-width="4" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 12h8v24h-8zm14 0h12v6H25z"></svg:path><svg:circle cx="25" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="25" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="25" cy="36" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="36" r="2" fill="currentColor"></svg:circle><svg:circle cx="37" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="37" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="37" cy="36" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlinePhoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
