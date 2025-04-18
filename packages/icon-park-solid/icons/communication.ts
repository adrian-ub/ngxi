import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCommunicationIcon],svg[icon-park-solid-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCommunication0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M33 38H22v-8h14v-8h8v16h-5l-3 3z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 6h32v24H17l-4 4l-4-4H4z"></svg:path><svg:path stroke="#000" d="M19 18h1m6 0h1m-15 0h1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCommunication0)"></svg:path>`,
})
export class IconParkSolidCommunicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
