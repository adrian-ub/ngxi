import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDropboxIcon],svg[logos-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0061FF" d="M63.995 0L0 40.771l63.995 40.772L128 40.771zM192 0l-64 40.775l64 40.775l64.001-40.775zM0 122.321l63.995 40.772L128 122.321L63.995 81.55zM192 81.55l-64 40.775l64 40.774l64-40.774zM64 176.771l64.005 40.772L192 176.771L128.005 136z"></svg:path>`,
})
export class LogosDropboxIcon {
  readonly viewBox = input("0 0 256 218")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
