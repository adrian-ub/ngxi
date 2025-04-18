import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiRightspeakerIcon],svg[fxemoji-rightspeaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ADB8BC" d="m192.585 62.546l151.318 153.699c18.786 19.082 18.786 49.708 0 68.79l-151.318 153.7c-30.772 31.257-83.962 9.467-83.962-34.395V96.941c-.001-43.862 53.189-65.651 83.962-34.395"></svg:path><svg:path fill="#597B91" d="M271.647 142.238h89.869c15.84 0 28.8 12.96 28.8 28.8v159.206c0 15.84-12.96 28.8-28.8 28.8h-89.869z"></svg:path>`,
})
export class FxemojiRightspeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
