import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHdmiConnectorIcon],svg[icon-park-solid-hdmi-connector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHdmiConnector0"><svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 43a5 5 0 0 0-10 0"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 42.11A19.9 19.9 0 0 0 24 44c3.04 0 5.92-.678 8.5-1.89"></svg:path><svg:circle cx="15" cy="15" r="3" fill="#000"></svg:circle><svg:circle cx="11" cy="23" r="3" fill="#000"></svg:circle><svg:circle cx="24" cy="11" r="3" fill="#000"></svg:circle><svg:circle cx="33" cy="15" r="3" fill="#000"></svg:circle><svg:circle cx="37" cy="23" r="3" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHdmiConnector0)"></svg:path>`,
})
export class IconParkSolidHdmiConnectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
