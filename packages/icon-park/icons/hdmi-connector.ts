import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHdmiConnectorIcon],svg[icon-park-hdmi-connector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 42.1091C18.0797 43.3221 20.9607 44 24 44C27.0393 44 29.9203 43.3221 32.5 42.1091"></svg:path><svg:circle cx="15" cy="15" r="3" fill="#fff"></svg:circle><svg:circle cx="11" cy="23" r="3" fill="#fff"></svg:circle><svg:circle cx="24" cy="11" r="3" fill="#fff"></svg:circle><svg:circle cx="33" cy="15" r="3" fill="#fff"></svg:circle><svg:circle cx="37" cy="23" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkHdmiConnectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
