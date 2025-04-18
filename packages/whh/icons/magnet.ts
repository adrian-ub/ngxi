import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMagnetIcon],svg[whh-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m731 768l37-256q0-133-61.5-194.5T512 256t-194.5 61.5T256 512l37 256H37L0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199l-37 256zm-429 64l18 128q0 26-37.5 45t-90.5 19t-90.5-19T64 960L46 832zm676 0l-18 128q0 26-37.5 45t-90.5 19t-90.5-19t-37.5-45l18-128z"></svg:path>`,
})
export class WhhMagnetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
