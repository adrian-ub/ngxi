import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeDownIcon],svg[zmdi-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 192q0 28-14.5 51T235 278V106q24 12 38.5 35t14.5 51M0 128h85L192 21v342L85 256H0z"></svg:path>`,
})
export class ZmdiVolumeDownIcon {
  readonly viewBox = input("0 0 288 384")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
