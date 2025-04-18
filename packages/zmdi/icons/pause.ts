import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPauseIcon],svg[zmdi-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341V43h85v298zM171 43h85v298h-85z"></svg:path>`,
})
export class ZmdiPauseIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
