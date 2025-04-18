import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPeertubeIcon],svg[openmoji-peertube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m33.669 42.435l-6.105-3.353l-6.105-3.353l5.956-3.61l5.956-3.61l.149 6.963z"></svg:path><svg:path fill="#3f3f3f" d="m16.757 11.706l19.11 11.793l-18.594 11.449z"></svg:path><svg:path fill="#e27022" d="M36.556 47.688L55.838 35.55L36.642 24.015z"></svg:path><svg:path fill="#9b9b9a" d="m17.101 35.895l19.196 12.309l-19.282 12.052z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36.263 23.347l-19.48-12.389v24.778zm19.48 12.389l-19.48-12.389v24.778zm-19.48 12.389l-19.48-12.389v24.778z"></svg:path>`,
})
export class OpenmojiPeertubeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
