import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsComputerDesktopIcon],svg[zondicons-computer-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1zM2 2v11h16V2z"></svg:path>`,
})
export class ZondiconsComputerDesktopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
