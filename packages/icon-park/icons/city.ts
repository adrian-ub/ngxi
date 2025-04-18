import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCityIcon],svg[icon-park-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42H44"></svg:path><svg:rect width="8" height="16" x="8" y="26" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34H13"></svg:path><svg:rect width="24" height="38" x="16" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="22" y="10" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="10" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="22" y="17" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="17" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="24" fill="#fff"></svg:rect><svg:rect width="4" height="4" x="30" y="31" fill="#fff"></svg:rect></svg:g>`,
})
export class IconParkCityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
