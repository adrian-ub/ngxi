import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitWebGridAltIcon],svg[uit-web-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-10 19H3V9.5h8.5zm9.5 0h-8.5V9.5H21zm0-12.5H3V3h18z"></svg:path>`,
})
export class UitWebGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
