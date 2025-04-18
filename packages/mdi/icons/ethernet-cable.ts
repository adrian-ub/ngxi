import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetCableIcon],svg[mdi-ethernet-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v4h2V3zM8 4v7h8V4h-2v4h-4V4zm2 8v10h4V12z"></svg:path>`,
})
export class MdiEthernetCableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
